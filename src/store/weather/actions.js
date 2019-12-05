import { createActions } from 'redux-actions';

export const {
  getFullSet,
  getFavsSet,
  getDefaultSet,
  getCurrent,
  getForecasted,
} = createActions(
  {
    GET_FULL_SET: ({ locationKey }) => ({ locationKey }),
    GET_FAVS_SET: undefined,
    GET_DEFAULT_SET: undefined,

    GET_CURRENT: {
      START: ({ locationKey, destination }) => ({ locationKey, destination }),
      SUCCESS: ({ data, locationKey, destination }) => ({
        data,
        locationKey,
        destination,
      }),
      FAILURE: ({ locationKey, destination }) => ({ locationKey, destination }),
    },
    GET_FORECASTED: {
      START: ({ locationKey }) => ({ locationKey }),
      SUCCESS: ({ data, dataSequence }) => ({ data, dataSequence }),
      FAILURE: undefined,
    },
  },
  { prefix: 'WEATHER' }
);
