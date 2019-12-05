import { createActions } from 'redux-actions';

export const {
  measurementSystemSet,
  favoriteLocationSet,
  favoriteLocationRemove,
} = createActions(
  {
    MEASUREMENT_SYSTEM_SET: ({ measurementSystem }) => ({ measurementSystem }),
    FAVORITE_LOCATION_SET: ({
      locationKey,
      country,
      administrativeArea,
      city,
    }) => ({ locationKey, country, administrativeArea, city }),
    FAVORITE_LOCATION_REMOVE: ({ locationKey }) => ({ locationKey }),
  },
  { prefix: 'CONFIG' }
);
