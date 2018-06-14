import { fork } from 'redux-saga/effects';
import restaurants from './restaurants';

const sagas = [
    ...restaurants
];

export default function* root() {
    yield sagas.map(saga => fork(saga));
}