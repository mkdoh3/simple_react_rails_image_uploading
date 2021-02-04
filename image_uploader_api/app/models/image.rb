class Image < ApplicationRecord
    include Rails.application.routes.url_helpers
    has_one_attached :image

    def image_url
        url_for(self.image)
    end
end
