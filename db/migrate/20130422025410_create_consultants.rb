class CreateConsultants < ActiveRecord::Migration
  def change
    create_table :consultants do |t|
      t.string :photo_id
      t.string :name
      t.string :sex
      t.string :company
      t.string :position
      t.date :birthday
      t.string :phone
      t.string :email
      t.string :address
      t.text :profile
      t.text :profession
      t.text :histroy_lesson
      t.text :publish

      t.timestamps
    end
  end
end
