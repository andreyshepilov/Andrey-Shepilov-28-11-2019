import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as weatherActions from 'store/weather/actions';

import Paper from '@material-ui/core/Paper';

import { CommonLayout } from 'layouts/CommonLayout';
import { PageErrorBoundary } from 'componentsCommon/PageErrorBoundary';
import { LocationAutocomplete } from 'components/LocationAutocomplete';
import { LocationInfo } from 'components/LocationInfo';
import { CurrentWeather } from 'components/CurrentWeather';

import useStyles from './WeatherPage.styles';

function WeatherPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isDefaultLocationSelected = useSelector(
    state => state.locations.isDefaultLocationSelected
  );

  useEffect(() => {
    if (isDefaultLocationSelected) {
      dispatch(weatherActions.getDefaultSet());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CommonLayout>
      <PageErrorBoundary>
        <Paper className={classes.sectionPaper}>
          <LocationAutocomplete />
        </Paper>
        <Paper className={classes.sectionPaper}>
          <LocationInfo />
        </Paper>

        <CurrentWeather />
      </PageErrorBoundary>
    </CommonLayout>
  );
}

export default WeatherPage;
