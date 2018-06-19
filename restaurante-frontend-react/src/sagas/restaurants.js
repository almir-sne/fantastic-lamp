import {put, takeLatest, call} from 'redux-saga/effects'
import restaurantAPI from '../api/restaurantAPI';
import {push} from 'connected-react-router';

function* listRestaurantsRequest({search}) {
    const response = yield call(restaurantAPI.listRestaurants, search);

    if (response && (response.status === 200 || response.status === 304)) {
        yield put({
            type: 'LIST_RESTAURANTS_SUCCESS',
            restaurants: response.data
        });
    }
}

function* persistRestaurantRequest({restaurant}) {
    const response = yield call(restaurantAPI.persistRestaurant, restaurant);

    if (response && (response.status === 200 || response.status === 201)) {
        yield put(push('/restaurants'))
    }
}

function* getRestaurantRequest({id}) {
    if (id) {
        const response = yield call(restaurantAPI.getRestaurant, id);

        if (response && (response.status === 200 || response.status === 304)) {
            yield put({
                type: 'GET_RESTAURANT_SUCCESS',
                restaurant: response.data
            });
        }
    } else {
        yield put({
            type: 'GET_RESTAURANT_SUCCESS'
        });
    }

}

function* deleteRestaurant({id}) {
    const response = yield call(restaurantAPI.deleteRestaurant, id);

    if (response && (response.status === 204)) {
        yield put({
            type: 'DELETE_RESTAURANT_SUCCESS',
            id: id
        });
    }
}

export default function* restaurantsWatcher() {
    yield [
        takeLatest('GET_RESTAURANT', getRestaurantRequest),
        takeLatest('LIST_RESTAURANTS', listRestaurantsRequest),
        takeLatest('PERSIST_RESTAURANT', persistRestaurantRequest),
        takeLatest('DELETE_RESTAURANT', deleteRestaurant)
    ]
};