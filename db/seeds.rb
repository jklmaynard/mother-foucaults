# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Event.create({title: 'Event One', description: 'This is an awesome event!', date: "January  11, 2017", likes: 0})
Event.create({title: 'Event Two', description: 'This is a meh event.', date: "January 23, 2017", likes: 0})
Event.create({title: 'Event Three', description: 'This one!  This is the event!', date: "January 5, 2017", likes: 0})
Event.create({title: 'Event Four', description: 'People will probably show up.', date: "January 17, 2017", likes: 0})
Event.create({title: 'Event Five', description: 'Another another event event!.', date: "February 17, 2017", likes: 0})
Event.create({title: 'Event Six', description: 'People will probably how up.', date: "December 17, 2016", likes: 0})
