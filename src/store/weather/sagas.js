import { all, call, put, takeLatest, fork, select } from 'redux-saga/effects';

import { weatherCurrentGet, weatherForecastGet } from 'api';

import { handleRequestError } from 'helpers/utils';

import * as locationsActions from 'store/locations/actions';
import * as weatherActions from 'store/weather/actions';

import { CurrentWeatherDestinations } from './enums';
import { defaultLocationData } from 'constants/defaultLocationData';

export function* getCurrentWeather(locationKey, destination) {
  yield put(
    weatherActions.getCurrent.start({
      locationKey,
      destination,
    })
  );

  let data;

  try {
    data = yield call(weatherCurrentGet, {
      locationKey,
      language: 'en-us',
      withFullDetails: 'true',
    });
  } catch (errors) {
    handleRequestError(errors);
    yield put(
      weatherActions.getCurrent.failure({
        locationKey,
        destination,
      })
    );
    return;
  }

  yield put(
    weatherActions.getCurrent.success({
      data: data[0],
      locationKey,
      destination,
    })
  );
}

export function* getForecastedWeather(locationKey) {
  yield put(weatherActions.getForecasted.start({ locationKey }));

  let data;

  try {
    data = yield call(weatherForecastGet, {
      locationKey,
      language: 'en-us',
      withFullDetails: 'true',
      isMetricValues: 'true',
    });
  } catch (errors) {
    handleRequestError(errors);
    yield put(weatherActions.getForecasted.failure());
    return;
  }

  const forecastData = {};
  let dataSequence = [];

  data.DailyForecasts.forEach(element => {
    forecastData[element.EpochDate] = { ...element };
    dataSequence.push(element.EpochDate);
  });

  yield put(
    weatherActions.getForecasted.success({
      data: forecastData,
      dataSequence,
    })
  );
}

export function* getWeatherSetDefault(action) {
  yield put(
    locationsActions.suggestionsGet.start({
      query: defaultLocationData.TEL_AVIV.CITY_NAME,
    })
  );

  yield put(
    locationsActions.selectedLocationSet({
      locationKey: defaultLocationData.TEL_AVIV.LOCATION_KEY,
    })
  );
}

export function* getWeatherSetFull(action) {
  const { locationKey } = action.payload;

  yield fork(
    getCurrentWeather,
    locationKey,
    CurrentWeatherDestinations.SELECTED
  );
  yield fork(
    getForecastedWeather,
    locationKey,
    CurrentWeatherDestinations.SELECTED
  );
}

export function* getWeatherSetFavorites(action) {
  const favoriteLocationsList = yield select(
    state => state.config.favoriteLocations.list
  );

  yield all(
    favoriteLocationsList.map(el =>
      call(getCurrentWeather, el, CurrentWeatherDestinations.FAVORITE)
    )
  );
}

export function* weatherSagas() {
  yield all([
    yield takeLatest(locationsActions.selectedLocationSet, getWeatherSetFull),
    yield takeLatest(weatherActions.getFullSet, getWeatherSetFull),

    yield takeLatest(weatherActions.getFavsSet, getWeatherSetFavorites),

    yield takeLatest(weatherActions.getDefaultSet, getWeatherSetDefault),
  ]);
}
