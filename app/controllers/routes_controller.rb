class RoutesController < ApplicationController

  respond_to :json

  def index
    @routes = Route.all
    render json: @routes
  end

  def show
    respond_with Route.find(params[:id])
  end

  def create
    respond_with Route.create(route_params)
  end

  def update
    respond_with Route.update(params[:id])
  end

  def destroy
    respond_with Route.destroy(params[:id])
  end

  private
  
  def route_params
    params.require(:route).permit(:name, :pickup_time, :dropoff_time)
  end

end