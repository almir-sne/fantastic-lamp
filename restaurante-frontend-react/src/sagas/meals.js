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

function* getMealsRequest({id}) {
    if (id) {
        const response = yield call(mealAPI.getMeal, id);

        if (response && (response.status === 200 || response.status === 304)) {
            yield put({
                type: 'GET_MEALS_SUCCESS',
                meal: response.data
            });
        }
    } else {
        yield put({
            type: 'GET_MEALS_SUCCESS'
        });
    }
}

function* persistMealRequest({meal}) {
    const response = yield call(mealAPI.persistMeal, meal);

    if (response && (response.status === 200 || response.status === 201)) {
        yield put(push('/meals'))
    }
}

export default function* mealsWatcher() {
    yield [
        takeLatest('LIST_MEALS', listMealsRequest),
        takeLatest('GET_MEAL', getMealsRequest),
        takeLatest('PERSIST_MEAL', persistMealRequest)

    ]
};