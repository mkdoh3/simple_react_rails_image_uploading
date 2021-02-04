class RemoveUrlFromImages < ActiveRecord::Migration[6.0]
  def change
    remove_column :images, :url
  end
end
