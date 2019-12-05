import { API } from './api';

const DOMAIN = process.env.REACT_APP_DOMAIN;

export const api = new API(DOMAIN);

export const locationsCitiesGet = params =>
  api.get(
    `/locations/v1/cities/autocomplete?apikey=${'Cdm1mUvzkgBTTL5rCDVZjm608PevqlTB'}&q=${
      params.query
    }&language=${params.language}` //TODO: move apikey
  );

export const weatherCurrentGet = params =>
  api.get(
    `/currentconditions/v1/${
      params.locationKey
    }?apikey=${'Cdm1mUvzkgBTTL5rCDVZjm608PevqlTB'}&language=${
      params.language
    }&details=${params.withFullDetails}` //TODO: move apikey
  );

export const weatherForecastGet = params =>
  api.get(
    `/forecasts/v1/daily/5day/${
      params.locationKey
    }?apikey=${'Cdm1mUvzkgBTTL5rCDVZjm608PevqlTB'}&language=${
      params.language
    }&details=${params.withFullDetails}&metric=${params.isMetricValues}` //TODO: move apikey
  );
