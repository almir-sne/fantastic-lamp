require 'rails_helper'

RSpec.describe RestaurantsController, type: :controller do
  describe 'GET #index' do
    it 'should get all restaurants when search param is empty' do
      create(:restaurant1)
      create(:restaurant2)
      get :index
      expect(response.body).to include 'restaurant_one'
      expect(response.body).to include 'restaurant_two'
      expect(response.status).to eq(200)
    end

    it 'should get restaurants matching search param' do
      create(:restaurant1)
      create(:restaurant2)
      get :index, :params => {search: 'restaurant_one'}
      expect(response.body).to include 'restaurant_one'
      expect(response.body).to_not include 'restaurant_two'
      expect(response.status).to eq(200)
    end
  end

  describe 'POST #create' do
    it 'should create restaurant' do
      restaurant1 = create(:restaurant1)
      post :create, :params => {restaurant: {name: :new_restaurant}}

      expect(response.status).to eq(201)
      expect(Restaurant.find_by_name :new_restaurant).to_not eq nil
    end
  end

  describe 'GET #show' do
    it 'should update restaurant' do
      restaurant = create(:restaurant1)
      get :show, :params => {id: restaurant.id}
      expect(response.status).to eq(200)
      expect(response.body).to include 'restaurant_one'
    end
  end

  describe 'PUT #update' do
    it 'should update restaurant' do
      restaurant = create(:restaurant1)
      put :update, :params => {id: restaurant.id, restaurant: {name: :updated_restaurant}}
      updated_restaurant = Restaurant.find_by_name :updated_restaurant
      expect(updated_restaurant.id).to eq restaurant.id
      expect(Restaurant.find_by_name restaurant.name).to eq nil
    end
  end


  describe 'DELETE #destroy' do
    it 'should delete restaurant' do
      restaurant = create(:restaurant1)
      delete :destroy, :params => {id: restaurant.id}
      expect(Restaurant.find_by_name restaurant.name).to eq nil
    end
  end
end
