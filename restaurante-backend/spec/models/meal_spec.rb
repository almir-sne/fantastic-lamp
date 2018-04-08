require 'rails_helper'

RSpec.describe Meal, type: :model do
  it "should associate meals and restaurants" do
    restaurant1 = build(:restaurant1)
    meal1 = create(:meal1)
    expect(meal1.restaurant.name).to eq(restaurant1.name)
  end

  it "should delete meals along with restaurant" do
    meal1 = create(:meal1)
    meal2 = create(:meal2)

    meal1.restaurant.destroy

    expect(Meal.all).to eq([meal2])
  end
end
