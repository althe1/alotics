class PointsController < ApplicationController

  respond_to :json

  def index
    @points = Point.all
    render json: @points
  end

  def show
    render json: Point.find(params[:id])
  end

  def create
    @route = Point.new(point_params)
    
    if @point.save
      render json: @point
    else
      render json: "Error couldn't save point"
    end

  end

  def update
    @point = Point.find(params[:id])

    if @point.update_attributes(point_params)
      render json: @point
    else
      render json: "Error couldn't update point"
    end
  end

  def destroy
    render json: Point.destroy(params[:id])
  end

  private

  def point_params
    params.permit(:company_name, :address, :phone, :email, :pick_or_drop, :date )
  end

end
