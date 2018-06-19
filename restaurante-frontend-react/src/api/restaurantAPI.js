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

const deleteRestaurant = (id) => {
    return API.delete('restaurants/' + id);
};

export default {listRestaurants, getRestaurant, persistRestaurant, deleteRestaurant}