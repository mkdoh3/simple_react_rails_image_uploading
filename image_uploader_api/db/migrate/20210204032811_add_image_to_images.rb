class AddImageToImages < ActiveRecord::Migration[6.0]
  def change
    add_column :images, :image, :blob
  end
end
