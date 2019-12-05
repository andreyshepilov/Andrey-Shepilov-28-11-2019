import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import * as configActions from 'store/config/actions';
import * as locationsActions from 'store/locations/actions';

import Paper from '@material-ui/core/Paper';
import { AddCircleOutline, FavoriteBorder } from '@material-ui/icons';

import { ROUTES } from 'constants/routes';
import history from 'componentsCommon/history';
import { Spinner } from 'componentsCommon/Spinner';

import useStyles from './FavoriteLocationCard.styles';

FavoriteLocationCard.propTypes = {
  locationKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

function FavoriteLocationCard({ locationKey }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const isMetricSystem = useSelector(
    state => state.config.measurementSystemIsMetric
  );

  const currentWeatherData = useSelector(
    state => state.weather.favorites[locationKey]
  );

  const currentLocationData = useSelector(
    state => state.config.favoriteLocations.locationData[locationKey]
  );

  const country = get(currentLocationData, 'country', '');
  const city = get(currentLocationData, 'city', '');

  const isLoading = get(currentWeatherData, 'isLoading', false);

  const weatherText = get(currentWeatherData, 'data.WeatherText', '');
  const weatherIcon = get(currentWeatherData, 'data.WeatherIcon', '');

  const TempValueMetric = get(
    currentWeatherData,
    'data.Temperature.Metric.Value',
    ''
  );
  const TempUnitMetric = get(
    currentWeatherData,
    'data.Temperature.Metric.Unit',
    ''
  );
  const TempValueImperial = get(
    currentWeatherData,
    'data.Temperature.Imperial.Value',
    ''
  );
  const TempUnitImperial = get(
    currentWeatherData,
    'data.Temperature.Imperial.Unit',
    ''
  );

  const RealFeelTempValueMetric = get(
    currentWeatherData,
    'data.RealFeelTemperature.Metric.Value',
    ''
  );
  const RealFeelTempUnitMetric = get(
    currentWeatherData,
    'data.RealFeelTemperature.Metric.Unit',
    ''
  );
  const RealFeelTempValueImperial = get(
    currentWeatherData,
    'data.RealFeelTemperature.Imperial.Value',
    ''
  );
  const RealFeelTempUnitImperial = get(
    currentWeatherData,
    'data.RealFeelTemperature.Imperial.Unit',
    ''
  );

  const onFavoriteRemove = () => {
    dispatch(
      configActions.favoriteLocationRemove({
        locationKey,
      })
    );
  };

  const onShowDetails = () => {
    dispatch(
      locationsActions.selectedLocationSet({
        locationKey,
      })
    );
    history.push(ROUTES.WEATHER);
  };

  return (
    <Paper className={classes.root}>
      <Spinner isVisible={isLoading} isSmall={false} />
      <div className={classes.location}>{`${city}, ${country}`}</div>
      <div className={classes.weatherWrapper}>
        <div className={classes.weatherConditionIconWrapper}>
          {weatherIcon ? (
            <img
              src={`https://developer.accuweather.com/sites/default/files/${(
                '0' + weatherIcon
              ).slice(-2)}-s.png`}
              alt='weather condition icon'
            />
          ) : null}
        </div>
        <div className={classes.weatherConditionDescription}>{weatherText}</div>
      </div>
      <div className={classes.temperatureWrapper}>
        <div className={classes.temperatureSection}>
          {isMetricSystem ? (
            TempValueMetric ? (
              <Fragment>
                <div>Temperature:</div>
                <div className={classes.temperatureValueWrapper}>
                  <div className={classes.temperatureValue}>
                    {TempValueMetric}
                  </div>
                  <div className={classes.temperatureUnit}>
                    {TempUnitMetric}
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className={classes.temperatureValue}>N/A</div>
            )
          ) : TempValueImperial ? (
            <Fragment>
              <div>Temperature:</div>
              <div className={classes.temperatureValueWrapper}>
                <div className={classes.temperatureValue}>
                  {TempValueImperial}
                </div>
                <div className={classes.temperatureUnit}>
                  {TempUnitImperial}
                </div>
              </div>
            </Fragment>
          ) : (
            <div className={classes.temperatureValue}>N/A</div>
          )}
        </div>
        <div className={classes.temperatureSection}>
          {isMetricSystem ? (
            RealFeelTempValueMetric ? (
              <Fragment>
                <div>Feels like:</div>
                <div className={classes.temperatureValueWrapper}>
                  <div className={classes.temperatureValue}>
                    {RealFeelTempValueMetric}
                  </div>
                  <div className={classes.temperatureUnit}>
                    {RealFeelTempUnitMetric}
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className={classes.temperatureValue}>N/A</div>
            )
          ) : RealFeelTempValueImperial ? (
            <Fragment>
              <div>Feels like:</div>
              <div className={classes.temperatureValueWrapper}>
                <div className={classes.temperatureValue}>
                  {RealFeelTempValueImperial}
                </div>
                <div className={classes.temperatureUnit}>
                  {RealFeelTempUnitImperial}
                </div>
              </div>
            </Fragment>
          ) : (
            <div className={classes.temperatureValue}>N/A</div>
          )}
        </div>
      </div>
      <div className={classes.overlay}>
        <div className={classes.overlayTopPart} onClick={onShowDetails}>
          <AddCircleOutline className={classes.overlayIcon} />
          <span className={classes.overlayLabel}>Show more</span>
        </div>
        <div className={classes.overlayBottomPart} onClick={onFavoriteRemove}>
          <FavoriteBorder className={classes.overlayIcon} />
          <span className={classes.overlayLabel}>Remove</span>
        </div>
      </div>
    </Paper>
  );
}

export default FavoriteLocationCard;
