class CreateRoutes < ActiveRecord::Migration[5.0]
  def change
    create_table :routes do |t|
      t.string :name
      t.date :pickup_time
      t.date :dropoff_time

      t.timestamps
    end
  end
end
