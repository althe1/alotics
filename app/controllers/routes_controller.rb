class RoutesController < ApplicationController

  respond_to :json

  def index
    @routes = Route.all
    render json: @routes
  end

  def show
    render json: Route.find(params[:id])
  end

  def create
    render json: Route.create(route_params)
  end

  def update
    render json: Route.update(params[:id])
  end

  def destroy
    render json: Route.destroy(params[:id])
  end

  private
  
  def route_params
    params.require(:route).permit(:name, :pickup_time, :dropoff_time)
  end

end