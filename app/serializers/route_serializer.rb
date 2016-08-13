class RouteSerializer < ActiveModel::Serializer
  attributes :id, :name, :pickup_time, :dropoff_time
end
