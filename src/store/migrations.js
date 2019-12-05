export const migrations = {
  0: state => {
    return {
      ...state,
      config: {
        ...state.config,
        measurementSystemIsMetric: true,
        favoriteLocations: {
          list: [],
          locationData: {},
        },
      },
    };
  },
};
