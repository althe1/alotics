class RouteDatetoDatetime < ActiveRecord::Migration[5.0]
  def up
    change_column :routes, :pickup_time, :datetime
    change_column :routes, :dropoff_time, :datetime
  end

  def down
    change_column :routes, :pickup_time, :date
    change_column :routes, :dropoff_time, :date
  end
end
