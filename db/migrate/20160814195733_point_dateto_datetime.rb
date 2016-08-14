class PointDatetoDatetime < ActiveRecord::Migration[5.0]
  def up
    change_column :points, :date, :datetime
  end

  def down
    change_column :points, :date, :date
  end
end
