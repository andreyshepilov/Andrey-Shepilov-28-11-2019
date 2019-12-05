import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { get } from 'lodash';
import moment from 'moment';

import Paper from '@material-ui/core/Paper';

import { Spinner } from 'componentsCommon/Spinner';

import useStyles from './ForecastedWeatherCard.styles';

ForecastedWeatherCard.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

function ForecastedWeatherCard({ id }) {
  const classes = useStyles();

  const forecastedItemData = useSelector(state =>
    get(state, `weather.forecasted.data[${id}]`, {})
  );

  const date = get(forecastedItemData, 'Date', '');

  const formattedDate = moment(date).format('MMM Do YYYY');

  const weatherIconDay = get(forecastedItemData, 'Day.Icon', '');

  const weatherTextDay = get(forecastedItemData, 'Day.IconPhrase', '');

  const TempMinValue = get(forecastedItemData, 'Temperature.Minimum.Value', '');
  const TempMinUnit = get(forecastedItemData, 'Temperature.Minimum.Unit', '');

  const TempMaxValue = get(forecastedItemData, 'Temperature.Maximum.Value', '');
  const TempMaxUnit = get(forecastedItemData, 'Temperature.Maximum.Unit', '');

  const isLoading = useSelector(state => state.weather.forecasted.isLoading);

  return (
    <Paper className={classes.root}>
      <Spinner isVisible={isLoading} isSmall={false} />
      <div className={classes.date}>{formattedDate}</div>
      <div className={classes.weatherWrapper}>
        <div className={classes.weatherConditionIconWrapper}>
          {weatherIconDay ? (
            <img
              src={`https://developer.accuweather.com/sites/default/files/${(
                '0' + weatherIconDay
              ).slice(-2)}-s.png`}
              alt='weather condition icon'
            />
          ) : null}
        </div>
        <div className={classes.weatherConditionDescription}>
          {weatherTextDay}
        </div>
      </div>
      <div className={classes.temperatureWrapper}>
        <div className={classes.temperatureSection}>
          {TempMinValue ? (
            <Fragment>
              <div className={classes.temperatureValue}>{TempMinValue}</div>
              <div className={classes.temperatureUnit}>{TempMinUnit}</div>
            </Fragment>
          ) : (
            <div className={classes.temperatureValue}>N/A</div>
          )}
        </div>
        <div className={classes.temperatureseparator}> - </div>
        <div className={classes.temperatureSection}>
          {TempMaxValue ? (
            <Fragment>
              <div className={classes.temperatureValue}>{TempMaxValue}</div>
              <div className={classes.temperatureUnit}>{TempMaxUnit}</div>
            </Fragment>
          ) : (
            <div className={classes.temperatureValue}>N/A</div>
          )}
        </div>
      </div>
    </Paper>
  );
}

export default ForecastedWeatherCard;
