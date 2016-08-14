class PointsController < ApplicationController

  respond_to :json

  def index
    @points = Point.all
    render json: @points
  end

  def show
    respond_with Point.find(params[:id])
  end

  def create
    respond_with Point.create(point_params)
  end

  def update
    respond_with Point.update(params[:id])
  end

  def destroy
    respond_with Point.destroy(params[:id])
  end

  private
  
  def point_params
    params.require(:point).permit(:company_name, :address, :phone, :email, :pick_or_drop, :date)
  end

end