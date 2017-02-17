class AddTimeColToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :time, :integer
  end
end
