class CreateLessons < ActiveRecord::Migration
  def change
    create_table :lessons do |t|
      t.string :title
      t.text :description
      t.string :string
      t.text :content
      t.date :singtime
      t.date :classtime
      t.string :place
      t.string :lessonhour

      t.timestamps
    end
  end
end
