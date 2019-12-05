import { createActions } from 'redux-actions';

export const {
  suggestionsGet,
  selectedLocationSet,
  selectedLocationRemove,
} = createActions(
  {
    SUGGESTIONS_GET: {
      START: ({ query }) => ({ query }),
      SUCCESS: ({ data, dataSequence }) => ({ data, dataSequence }),
      FAILURE: undefined,
    },
    SELECTED_LOCATION_SET: ({ locationKey }) => ({ locationKey }),
    SELECTED_LOCATION_REMOVE: undefined,
  },
  { prefix: 'LOCATIONS' }
);
