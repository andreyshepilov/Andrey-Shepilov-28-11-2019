import { handleActions } from 'redux-actions';

import * as actions from './actions';
import { CurrentWeatherDestinations } from './enums';

const initialState = {
  current: {
    isLoading: false,
    data: {},
  },
  forecasted: {
    isLoading: false,
    data: {},
    dataSequence: [],
  },
  favorites: {},
};

export const weatherReducer = handleActions(
  {
    [actions.getCurrent.start]: (state, action) => {
      const { destination, locationKey } = action.payload;

      if (destination === CurrentWeatherDestinations.SELECTED) {
        return {
          ...state,
          current: {
            ...state.current,
            isLoading: true,
          },
        };
      } else if (destination === CurrentWeatherDestinations.FAVORITE) {
        return {
          ...state,
          favorites: {
            ...state.favorites,
            [locationKey]: {
              ...state.favorites[locationKey],
              isLoading: true,
            },
          },
        };
      } else {
        return state;
      }
    },
    [actions.getCurrent.success]: (state, action) => {
      const { data, destination, locationKey } = action.payload;

      if (destination === CurrentWeatherDestinations.SELECTED) {
        return {
          ...state,
          current: {
            ...state.current,
            isLoading: false,
            data: action.payload.data,
          },
        };
      } else if (destination === CurrentWeatherDestinations.FAVORITE) {
        return {
          ...state,
          favorites: {
            ...state.favorites,
            [locationKey]: {
              ...state.favorites[locationKey],
              isLoading: false,
              data,
            },
          },
        };
      } else {
        return state;
      }
    },
    [actions.getCurrent.failure]: (state, action) => {
      const { destination, locationKey } = action.payload;

      if (destination === CurrentWeatherDestinations.SELECTED) {
        return {
          ...state,
          current: {
            ...state.current,
            isLoading: false,
          },
        };
      } else if (destination === CurrentWeatherDestinations.FAVORITE) {
        return {
          ...state,
          favorites: {
            ...state.favorites,
            [locationKey]: {
              ...state.favorites[locationKey],
              isLoading: false,
            },
          },
        };
      } else {
        return state;
      }
    },

    [actions.getForecasted.start]: (state, action) => ({
      ...state,
      forecasted: {
        ...state.forecasted,
        isLoading: true,
      },
    }),
    [actions.getForecasted.success]: (state, action) => ({
      ...state,
      forecasted: {
        ...state.forecasted,
        isLoading: false,
        data: action.payload.data,
        dataSequence: action.payload.dataSequence,
      },
    }),
    [actions.getForecasted.failure]: (state, action) => ({
      ...state,
      forecasted: {
        ...state.forecasted,
        isLoading: false,
      },
    }),
  },
  initialState
);
