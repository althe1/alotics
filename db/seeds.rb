# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Route.create(name: "abc", pickup_time: Time.now, dropoff_time: Time.now + 10.days)
Point.create(company_name: "abc", address: "123 Fake rd.", phone: "8185553333", email: "abc@example.com", pick_or_drop: "pick", date: Time.now)