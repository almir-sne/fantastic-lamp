require 'rails_helper'

RSpec.describe MealsController, type: :controller do
  describe 'GET #index' do
    it 'should get all meals when search param is empty' do
      create(:meal1)
      create(:meal2)
      get :index
      expect(response.body).to include 'meal_one'
      expect(response.body).to include 'restaurant_one'
      expect(response.body).to include 'meal_two'
      expect(response.body).to include 'restaurant_two'
      expect(response.status).to eq(200)
    end

    it 'should get meals matching search param' do
      create(:meal1)
      create(:meal2)
      get :index, :params => {search: 'meal_one'}
      expect(response.body).to include 'meal_one'
      expect(response.body).to include 'restaurant_one'
      expect(response.body).to_not include 'meal_two'
      expect(response.body).to_not include 'restaurant_two'
      expect(response.status).to eq(200)
    end
  end

  describe 'POST #create' do
    it 'should create meal' do
      restaurant1 = create(:restaurant1)
      post :create, :params => {meal: {name: :new_meal, restaurant_id: restaurant1.id, price: 10.21}}

      expect(response.status).to eq(201)
      created_meal = Meal.find_by_name :new_meal
      expect(created_meal.restaurant_id).to eq restaurant1.id
      expect(created_meal.price).to eq 10.21
    end
  end

  describe 'GET #show' do
    it 'should update meal' do
      meal = create(:meal1)
      get :show, :params => {id: meal.id}
      expect(response.status).to eq(200)
      expect(response.body).to include 'meal_one'
    end
  end

  describe 'PUT #update' do
    it 'should update meal' do
      meal = create(:meal1)
      put :update, :params => {id: meal.id, meal: {name: :updated_meal, restaurant_id: meal.restaurant_id, price: 10.21}}
      updated_meal = Meal.find_by_name :updated_meal
      expect(updated_meal.restaurant_id).to eq meal.restaurant_id
      expect(updated_meal.price).to eq 10.21
      expect(updated_meal.id).to eq meal.id
      expect(Meal.find_by_name meal.name).to eq nil
    end
  end


  describe 'DELETE #destroy' do
    it 'should delete meal' do
      meal = create(:meal1)
      delete :destroy, :params => {id: meal.id}
      expect(Meal.find_by_name meal.name).to eq nil
    end
  end
end
