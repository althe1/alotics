class PointSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :address, :phone, :email, :pick_or_drop, :date
end
