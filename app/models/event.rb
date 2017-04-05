class Event < ApplicationRecord
  has_attached_file :iamge
  validates_attachment_content_type :photo, content_type:  {content_type: 'image/jpeg', 'image/gif', 'image/png'}
end
