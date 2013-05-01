class Lesson < ActiveRecord::Base
  belongs_to :lessoncate
  belongs_to :consultant
  attr_accessible :classtime, :content, :description, :lessoncate_id, :lessonhour, :place, :singtime, :string, :title ,:consultant_id
end
