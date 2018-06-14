import {put, takeLatest, call} from 'redux-saga/effects'
import restaurantAPI from '../api/restaurant';

function* listRestaurantsRequest() {
    const response = yield call(restaurantAPI.listRestaurants);

    if (response && response.status === 200) {
        yield put({
            type: 'LIST_RESTAURANTS_SUCCESS',
            restaurants: response.data
        });
    }
}

function* watchListRestaurants() {
    yield takeLatest('LIST_RESTAURANTS', listRestaurantsRequest)
}

export default [watchListRestaurants];