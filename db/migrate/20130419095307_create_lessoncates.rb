class CreateLessoncates < ActiveRecord::Migration
  def change
    create_table :lessoncates do |t|
      t.string :name

      t.timestamps
    end
  end
end
