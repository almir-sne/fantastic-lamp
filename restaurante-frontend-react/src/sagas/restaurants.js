import {put, takeLatest, call} from 'redux-saga/effects'
import restaurantAPI from '../api/restaurantAPI';
import {push} from 'connected-react-router';

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

    if (response && (response.status === 200)) {
        yield put({
            type: 'DELETE_RESTAURANT_SUCCESS',
            restaurant: id
        });
    }
}

function* watchGetRestaurant() {
    yield takeLatest('GET_RESTAURANT', getRestaurantRequest)
}

function* watchListRestaurants() {
    yield takeLatest('LIST_RESTAURANTS', listRestaurantsRequest)
}

function* watchPersistRestaurant() {
    yield takeLatest('PERSIST_RESTAURANT', persistRestaurantRequest)
}

function* watchDeleteRestaurant() {
    yield takeLatest('DELETE_RESTAURANT', deleteRestaurant)
}

export default [watchListRestaurants, watchPersistRestaurant, watchGetRestaurant, watchDeleteRestaurant];