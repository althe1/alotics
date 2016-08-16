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
    @route = Route.new(route_params)

    if @route.save
      render json: @route
    else
      render json: "Error couldn't save route"
    end

  end

  def update
    @route = Route.find(params[:id])

    if @route.update_attributes(route_params)
      render json: @route
    else
      render json: "Error couldn't update route"
    end
  end

  def destroy
    render json: Route.destroy(params[:id])
  end

  private

  def route_params
    params.require(:route).permit(:id, :name, :pickup_time, :dropoff_time)
  end

end
