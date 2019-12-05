import { handleActions } from 'redux-actions';

import * as actions from './actions';
import { MeasurementSystem } from './enums';

const initialState = {
  measurementSystemIsMetric: true,
  favoriteLocations: {
    list: [],
    locationData: {},
  },
};

export const configReducer = handleActions(
  {
    [actions.measurementSystemSet]: (state, action) => {
      const { measurementSystem } = action.payload;

      return {
        ...state,
        measurementSystemIsMetric:
          measurementSystem === MeasurementSystem.METRIC ? true : false,
      };
    },

    [actions.favoriteLocationSet]: (state, action) => {
      const { locationKey, country, administrativeArea, city } = action.payload;

      const updatedList = [...state.favoriteLocations.list];
      updatedList.push(locationKey);
      if (updatedList.length > 5) updatedList.shift();

      return {
        ...state,
        favoriteLocations: {
          ...state.favoriteLocations,
          list: updatedList,
          locationData: {
            ...state.favoriteLocations.locationData,
            [locationKey]: {
              country,
              administrativeArea,
              city,
            },
          },
        },
      };
    },

    [actions.favoriteLocationRemove]: (state, action) => {
      const locationKey = action.payload.locationKey;
      const updatedList = [...state.favoriteLocations.list];
      const locationData = state.favoriteLocations.locationData;

      delete locationData[locationKey];

      const index = updatedList.indexOf(locationKey);
      if (index > -1) {
        updatedList.splice(index, 1);
      }

      return {
        ...state,
        favoriteLocations: {
          ...state.favoriteLocations,
          list: updatedList,
          locationData,
        },
      };
    },
  },
  initialState
);
