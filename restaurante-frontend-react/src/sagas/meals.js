import {put, takeLatest, call} from 'redux-saga/effects'
import mealAPI from '../api/mealAPI';
import {push} from 'connected-react-router';

function* listMealsRequest({search}) {
    const response = yield call(mealAPI.listMeals, search);

    if (response && (response.status === 200 || response.status === 304)) {
        yield put({
            type: 'LIST_MEALS_SUCCESS',
            meals: response.data
        });
    }
}

export default function* mealsWatcher() {
    yield [
        takeLatest('LIST_MEALS', listMealsRequest),
    ]
};