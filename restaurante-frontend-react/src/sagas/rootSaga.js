import { fork } from 'redux-saga/effects';
import restaurantsWatcher from './restaurants';

const sagas = [
    restaurantsWatcher
];

export default function* root() {
    yield sagas.map(saga => fork(saga));
}