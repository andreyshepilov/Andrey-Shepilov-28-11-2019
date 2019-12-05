import { fork } from 'redux-saga/effects';

import { weatherSagas } from './weather/sagas';
import { locationsSagas } from './locations/sagas';

export default function* rootSaga() {
  yield fork(weatherSagas);
  yield fork(locationsSagas);
}
