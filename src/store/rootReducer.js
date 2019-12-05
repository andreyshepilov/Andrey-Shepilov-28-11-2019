import { combineReducers } from 'redux';

import { weatherReducer } from './weather/reducer';
import { locationsReducer } from './locations/reducer';
import { configReducer } from './config/reducer';

export default combineReducers({
  weather: weatherReducer,
  locations: locationsReducer,
  config: configReducer,
});
