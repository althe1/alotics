class PointsController < ApplicationController

  def index
    # @points = current_user.points
    @points = Point.all
    render json: @points
  end

end