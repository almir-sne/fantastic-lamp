require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  it "should list restaurants" do
     restaurant1 = create(:restaurant1)
     restaurant2 = create(:restaurant2)

    expect(Restaurant.all).to eq([restaurant1, restaurant2])
  end
end
