class ImagesController < ApplicationController

    def create
        @image = Image.create(image_params)
        # @image.image.purge
        # @image.image.attach(image_params)
        # @image.save
        render json: @image, methods: :image_url
    end

private
    def image_params
        params.permit(:image)
    end
end
