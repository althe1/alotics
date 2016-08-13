class CreatePoints < ActiveRecord::Migration[5.0]
  def change
    create_table :points do |t|
      t.string :company_name
      t.string :address
      t.string :phone
      t.string :email
      t.string :pick_or_drop
      t.date :date

      t.timestamps
    end
  end
end
