import {put, takeLatest, call} from 'redux-saga/effects'
import restaurantAPI from '../api/restaurantAPI';

function* listRestaurantsRequest() {
    const response = yield call(restaurantAPI.listRestaurants);

    if (response && (response.status === 200 || response.status === 304)) {
        yield put({
            type: 'LIST_RESTAURANTS_SUCCESS',
            restaurants: response.data
        });
    }
}

function* persistRestaurantRequest({restaurant}) {
    const response = yield call(restaurantAPI.persistRestaurant, restaurant);

    if (response && (response.status === 200)) {
        yield put({
            type: 'PERSIST_RESTAURANT_SUCCESS'
        });
    }
}

function* watchListRestaurants() {
    yield takeLatest('LIST_RESTAURANTS', listRestaurantsRequest)
}

function* watchPersistRestaurant() {
    yield takeLatest('PERSIST_RESTAURANT', persistRestaurantRequest)
}

function* getRestaurantRequest({id}) {
    const response = yield call(restaurantAPI.getRestaurant, id);

    if (response && (response.status === 200 || response.status === 304)) {
        yield put({
            type: 'GET_RESTAURANT_SUCCESS',
            restaurant: response.data
        });
    }
}

function* watchGetRestaurant() {
    yield takeLatest('GET_RESTAURANT', getRestaurantRequest)
}

export default [watchListRestaurants, watchPersistRestaurant, watchGetRestaurant];