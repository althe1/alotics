class RoutesController < ApplicationController

  protect_from_forgery with: :null_session
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
    @route = Route.find(params[:id])
    render json: @route.update_attributes(route_params)
  end

  def destroy
    render json: Route.destroy(params[:id])
  end

  private

  def route_params
    params.require(:route).permit(:id, :name, :pickup_time, :dropoff_time)
  end

end
