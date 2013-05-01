class AddConsultantIdToLesson < ActiveRecord::Migration
 def self.up
    add_column :lessons, :consultant_id, :integer
  end

  def self.down
    remove_column :lessons, :consultant_id
  end
end
