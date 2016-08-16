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
    render json: Point.create(point_params)
  end

  def update
    render json: Point.update(params[:id])
  end

  def destroy
    render json: Point.destroy(params[:id])
  end

  private

  def point_params
    params.require(:point).permit(:company_name, :address, :phone, :email, :pick_or_drop, :date )
  end

end
