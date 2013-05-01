class AddLessoncateIdToLesson < ActiveRecord::Migration
def self.up
    add_column :lessons, :lessoncate_id, :integer
  end

  def self.down
    remove_column :lessons, :lessoncate_id
  end
end
