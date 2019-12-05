import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = {
  suggestions: {
    isLoading: false,
    data: {},
    dataSequence: [],
    selectedLocationKey: '',
  },
  isDefaultLocationSelected: true,
};

export const locationsReducer = handleActions(
  {
    [actions.suggestionsGet.start]: (state, action) => ({
      ...state,
      suggestions: {
        ...state.suggestions,
        isLoading: true,
      },
    }),
    [actions.suggestionsGet.success]: (state, action) => {
      const { data, dataSequence } = action.payload;

      return {
        ...state,
        suggestions: {
          ...state.suggestions,
          isLoading: false,
          data,
          dataSequence,
        },
      };
    },
    [actions.suggestionsGet.failure]: (state, action) => ({
      ...state,
      suggestions: {
        ...state.suggestions,
        isLoading: false,
      },
    }),

    [actions.selectedLocationSet]: (state, action) => ({
      ...state,
      isDefaultLocationSelected: false,
      suggestions: {
        ...state.suggestions,
        selectedLocationKey: action.payload.locationKey,
      },
    }),

    [actions.selectedLocationRemove]: (state, action) => ({
      ...state,
      suggestions: {
        ...state.suggestions,
        selectedLocationKey: '',
      },
    }),
  },
  initialState
);
