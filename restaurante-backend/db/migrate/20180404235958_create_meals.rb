class CreateMeals < ActiveRecord::Migration[5.1]
  def change
    create_table :meals do |t|
      t.string :name
      t.belongs_to :restaurant, foreign_key: true

      t.timestamps
    end
  end
end
