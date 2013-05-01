class Consultant < ActiveRecord::Base
  has_many :lessons
  attr_accessible :address, :birthday, :company, :email, :histroy_lesson, :name, :phone, :photo_id, :position, :profession, :profile, :publish, :sex

  has_attached_file :excerpt_image, :styles => { :medium => "300*300>", :thumb => "100*100>"}
end
