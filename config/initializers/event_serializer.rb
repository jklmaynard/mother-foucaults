class EventSerializer < ActiveModel::Serializer
 attributes :id, :title, :description, :date, :likes, :image
end
