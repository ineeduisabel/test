class IndexController < ApplicationController
  
  def index
     @lessons = Lesson.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @lessons }
    end
  end

  layout "index", :only => :index
end
