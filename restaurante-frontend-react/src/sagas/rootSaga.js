import { fork } from 'redux-saga/effects';
import restaurantsWatcher from './restaurants';
import mealsWatcher from './meals'

const sagas = [
    restaurantsWatcher,
    mealsWatcher
];

export default function* root() {
    yield sagas.map(saga => fork(saga));
}