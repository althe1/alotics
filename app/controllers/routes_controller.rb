class RoutesController < ApplicationController

  def index
    # @routes = current_user.routes
    @routes = Route.all
    render json: @routes
  end

          
end