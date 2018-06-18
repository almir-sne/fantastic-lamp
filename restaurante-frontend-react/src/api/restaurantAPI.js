import API from './api'

const listRestaurants = () => {
    return API.get('restaurants');
};

const getRestaurant = (id) => {
    return API.get('restaurants/' + id);
};

const persistRestaurant = (restaurant) => {
    return restaurant.id ? API.put('restaurants/' + restaurant.id, restaurant) : API.post('restaurants', restaurant);
};

export default {listRestaurants, getRestaurant, persistRestaurant}