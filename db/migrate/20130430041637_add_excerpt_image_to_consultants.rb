class AddExcerptImageToConsultants < ActiveRecord::Migration
  def self.up
    add_column :consultants, :excerpt_image_file_name, :striing
    add_column :consultants, :excerpt_image_content_type, :striing
    add_column :consultants, :excerpt_image_file_size, :integer
    add_column :consultants, :excerpt_image_uplated_at, :datetime
  end

  def self.down
    remove_column :consultants, :excerpt_image_file_name
    remove_column :consultants, :excerpt_image_content_type
    remove_column :consultants, :excerpt_image_file_size
    remove_column :consultants, :excerpt_image_uplated_at
  end
end
