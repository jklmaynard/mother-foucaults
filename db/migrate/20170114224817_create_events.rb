class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.string :date
      t.integer :likes

      t.timestamps
    end
  end
end
