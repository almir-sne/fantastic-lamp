class AddPriceToMeal < ActiveRecord::Migration[5.1]
  def change
    add_column :meals, :price, :decimal, :precision => 15, :scale => 2
  end
end
