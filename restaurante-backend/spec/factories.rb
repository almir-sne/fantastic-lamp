FactoryBot.define do
  factory :restaurant1, class: Restaurant do
    name :restaurant_one
  end

  factory :restaurant2, class: Restaurant do
    name :restaurant_two
  end

  factory :meal1, class: Meal do
    name :meal_one
    association :restaurant, factory: :restaurant1
  end

  factory :meal2, class: Meal do
    name :meal_two
    association :restaurant, factory: :restaurant2
  end
end