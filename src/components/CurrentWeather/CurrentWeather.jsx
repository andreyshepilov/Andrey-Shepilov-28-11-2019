import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { get } from 'lodash';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

import AnimatedContainer from 'componentsCommon/AnimatedContainer/AnimatedContainer';
import { AdditionalWeatherDetails } from './AdditionalWeatherDetails';
import ForecastedWeatherCard from 'components/ForecastedWeatherCard/ForecastedWeatherCard';
import { Spinner } from 'componentsCommon/Spinner';

import useStyles from './CurrentWeather.styles';

function CurrentWeather() {
  const classes = useStyles();

  const currentWeatherData = useSelector(state => state.weather.current.data);

  const isLoading = useSelector(state => state.weather.current.isLoading);

  const isMetricSystem = useSelector(
    state => state.config.measurementSystemIsMetric
  );

  const forecastedWeatherDataSequence = useSelector(
    state => state.weather.forecasted.dataSequence
  );

  const [detailsIsOpened, setDetailsIsOpened] = useState(false);

  const weatherText = get(currentWeatherData, 'WeatherText', '');
  const weatherIcon = get(currentWeatherData, 'WeatherIcon', '');

  const TempValueMetric = get(
    currentWeatherData,
    'Temperature.Metric.Value',
    ''
  );
  const TempUnitMetric = get(currentWeatherData, 'Temperature.Metric.Unit', '');
  const TempValueImperial = get(
    currentWeatherData,
    'Temperature.Imperial.Value',
    ''
  );
  const TempUnitImperial = get(
    currentWeatherData,
    'Temperature.Imperial.Unit',
    ''
  );

  const RealFeelTempValueMetric = get(
    currentWeatherData,
    'RealFeelTemperature.Metric.Value',
    ''
  );
  const RealFeelTempUnitMetric = get(
    currentWeatherData,
    'RealFeelTemperature.Metric.Unit',
    ''
  );
  const RealFeelTempValueImperial = get(
    currentWeatherData,
    'RealFeelTemperature.Imperial.Value',
    ''
  );
  const RealFeelTempUnitImperial = get(
    currentWeatherData,
    'RealFeelTemperature.Imperial.Unit',
    ''
  );

  const onToggleDetails = () => {
    setDetailsIsOpened(!detailsIsOpened);
  };

  const renderForecastList = () => {
    return (
      <ul className={classes.forecastList}>
        {forecastedWeatherDataSequence.map(el => {
          return (
            <li className={classes.forecastListItem} key={el}>
              <ForecastedWeatherCard id={el} isMetricSystem={isMetricSystem} />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Paper className={classes.root}>
      <Typography variant='h6' component='h2' className={classes.header}>
        Weather today:
      </Typography>
      <div className={classes.mainContentWrapper}>
        <Spinner isVisible={isLoading} isSmall={false} />
        <div className={classes.mainWeatherConditions}>
          <div className={classes.temperatureWrapper}>
            <div className={classes.temperatureSection}>
              <div className={classes.temperaturePrefix}>Temperature:</div>
              <div className={classes.temperatureMain}>
                {isMetricSystem ? (
                  TempValueMetric ? (
                    <Fragment>
                      <div className={classes.temperatureValue}>
                        {TempValueMetric}
                      </div>
                      <div className={classes.temperatureUnit}>
                        {TempUnitMetric}
                      </div>
                    </Fragment>
                  ) : (
                    <div className={classes.temperatureValue}>N/A</div>
                  )
                ) : TempValueImperial ? (
                  <Fragment>
                    <div className={classes.temperatureValue}>
                      {TempValueImperial}
                    </div>
                    <div className={classes.temperatureUnit}>
                      {TempUnitImperial}
                    </div>
                  </Fragment>
                ) : (
                  <div className={classes.temperatureValue}>N/A</div>
                )}
              </div>
            </div>
            <div className={classes.temperatureSection}>
              <div className={classes.temperaturePrefix}>Feels like:</div>
              <div className={classes.temperatureMain}>
                {isMetricSystem ? (
                  RealFeelTempValueMetric ? (
                    <Fragment>
                      <div className={classes.temperatureValue}>
                        {RealFeelTempValueMetric}
                      </div>
                      <div className={classes.temperatureUnit}>
                        {RealFeelTempUnitMetric}
                      </div>
                    </Fragment>
                  ) : (
                    <div className={classes.temperatureValue}>N/A</div>
                  )
                ) : RealFeelTempValueImperial ? (
                  <Fragment>
                    <div className={classes.temperatureValue}>
                      {RealFeelTempValueImperial}
                    </div>
                    <div className={classes.temperatureUnit}>
                      {RealFeelTempUnitImperial}
                    </div>
                  </Fragment>
                ) : (
                  <div className={classes.temperatureValue}>N/A</div>
                )}
              </div>
            </div>
          </div>
          <Paper className={classes.weatherWrapper}>
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
            <div className={classes.weatherConditionDescription}>
              {weatherText}
            </div>
          </Paper>
        </div>

        <Button
          variant='contained'
          color='primary'
          className={classes.moreButton}
          startIcon={detailsIsOpened ? <ExpandLess /> : <ExpandMore />}
          onClick={onToggleDetails}
        >
          {detailsIsOpened ? 'Show less' : 'Show more'}
        </Button>
      </div>
      <div className={classes.bottomSection}>
        <AnimatedContainer show={!detailsIsOpened}>
          {renderForecastList()}
        </AnimatedContainer>
        <AnimatedContainer show={detailsIsOpened}>
          <AdditionalWeatherDetails isMetricSystem={isMetricSystem} />
        </AnimatedContainer>
      </div>
    </Paper>
  );
}

export default CurrentWeather;
