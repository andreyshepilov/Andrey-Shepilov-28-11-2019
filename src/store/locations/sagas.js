import { all, call, put, takeLatest } from 'redux-saga/effects';

import { locationsCitiesGet } from 'api';
import { handleRequestError } from 'helpers/utils';

import * as actions from './actions';

export function* getSuggestions(action) {
  const { query } = action.payload;

  let data;

  try {
    data = yield call(locationsCitiesGet, {
      query,
      language: 'en-us',
    });
  } catch (errors) {
    handleRequestError(errors);
    yield put(actions.suggestionsGet.failure());
    return;
  }

  const locationsData = {};
  let dataSequence = [];

  data.forEach(element => {
    locationsData[element.Key] = { ...element };
    dataSequence.push(element.Key);
  });

  yield put(
    actions.suggestionsGet.success({
      data: locationsData,
      dataSequence: dataSequence,
    })
  );
}

export function* locationsSagas() {
  yield all([yield takeLatest(actions.suggestionsGet.start, getSuggestions)]);
}
