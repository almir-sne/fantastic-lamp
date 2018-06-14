import API from './api'

const listRestaurants = () => {
    return API.get('restaurants');
};

export default {listRestaurants}