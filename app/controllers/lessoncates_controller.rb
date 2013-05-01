class LessoncatesController < ApplicationController
  # GET /lessoncates
  # GET /lessoncates.json
  def index
    @lessoncates = Lessoncate.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @lessoncates }
    end
  end

  # GET /lessons/1
  # GET /lessons/1.json
  def show
    @lessoncate = Lessoncate.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @lessoncate }
    end
  end

  # GET /lessoncates/new
  # GET /lessoncates/new.json
  def new
    @lessoncate = Lessoncate.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @lessoncate }
    end
  end

  # GET /lessons/1/edit
  def edit
    @lessoncate = Lessoncate.find(params[:id])
  end

  # POST /lessoncates
  # POST /lessoncates.json
  def create
    @lessoncate = Lessoncate.new(params[:lessoncate])

    respond_to do |format|
      if @lessoncate.save
        format.html { redirect_to @lessoncate, notice: 'Lesson was successfully created.' }
        format.json { render json: @lessoncate, status: :created, location: @lessoncate }
      else
        format.html { render action: "new" }
        format.json { render json: @lessoncate.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /lessons/1
  # PUT /lessons/1.json
  def update
    @lessoncate = Lessoncate.find(params[:id])

    respond_to do |format|
      if @lessoncate.update_attributes(params[:lessoncate])
        format.html { redirect_to @lessoncate, notice: 'Lesson was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @lessoncate.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lessons/1
  # DELETE /lessons/1.json
  def destroy
    @lessoncate = Lessoncate.find(params[:id])
    @lessoncate.destroy

    respond_to do |format|
      format.html { redirect_to lessoncates_url }
      format.json { head :no_content }
    end
  end
end

