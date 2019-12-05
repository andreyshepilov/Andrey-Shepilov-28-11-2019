import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { get } from 'lodash';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Spinner } from 'componentsCommon/Spinner';

import useStyles from './AdditionalWeatherDetails.styles';

AdditionalWeatherDetails.propTypes = {
  isMetricSystem: PropTypes.bool.isRequired,
};

function AdditionalWeatherDetails({ isMetricSystem }) {
  const classes = useStyles();

  const currentWeatherData = useSelector(state => state.weather.current.data);

  const isLoading = useSelector(state => state.weather.current.isLoading);

  const renderSingleValuedParam = (dataObj, partialSelector, label) => {
    const value = get(dataObj, partialSelector, '');
    return (
      <div className={classes.additionalParameter}>
        <b>{label}:</b> <span>{value ? value : 'N/A'}</span>
      </div>
    );
  };

  const renderMultiValuedParam = (dataObj, partialSelector, label) => {
    const metricValue = get(dataObj, `${partialSelector}.Metric.Value`, '');
    const metricUnit = get(dataObj, `${partialSelector}.Metric.Unit`, '');
    const imperialValue = get(dataObj, `${partialSelector}.Imperial.Value`, '');
    const imperialUnit = get(dataObj, `${partialSelector}.Imperial.Unit`, '');
    return (
      <div className={classes.additionalParameter}>
        <b>{label}:</b>{' '}
        {isMetricSystem ? (
          <span>{metricValue ? `${metricValue}, ${metricUnit}` : 'N/A'}</span>
        ) : (
          <span>
            {imperialValue ? `${imperialValue}, ${imperialUnit}` : 'N/A'}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.sectionPaper}>
        <Typography
          variant='h6'
          component='h3'
          className={classes.sectionHeader}
        >
          Temperature
        </Typography>
        <div className={classes.sectionMainWrapper}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              {renderMultiValuedParam(
                currentWeatherData,
                'RealFeelTemperatureShade',
                'Real feel in the shade'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'Past24HourTemperatureDeparture',
                'Departure for past 24 hours'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'ApparentTemperature',
                'Apparent'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'WindChillTemperature',
                'Wind chill'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'WetBulbTemperature',
                'Wet bulb'
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {renderMultiValuedParam(
                currentWeatherData,
                'TemperatureSummary.Past6HourRange.Minimum',
                'Min. summary / past 6 hours'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'TemperatureSummary.Past12HourRange.Minimum',
                'Min. summary / past 12 hours'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'TemperatureSummary.Past24HourRange.Minimum',
                'Min. summary / past 24 hours'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'TemperatureSummary.Past6HourRange.Maximum',
                'Max. summary / past 6 hours'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'TemperatureSummary.Past12HourRange.Maximum',
                'Max. summary / past 12 hours'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'TemperatureSummary.Past24HourRange.Maximum',
                'Max. summary / past 24 hours'
              )}
            </Grid>
          </Grid>
        </div>
      </Paper>

      <Paper className={classes.sectionPaper}>
        <Typography
          variant='h6'
          component='h3'
          className={classes.sectionHeader}
        >
          Precipitation
        </Typography>
        <div className={classes.sectionMainWrapper}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              {renderSingleValuedParam(
                currentWeatherData,
                'HasPrecipitation',
                'Precipitation'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'Precip1hr',
                'Amount of precipitation / past hour'
              )}

              {renderSingleValuedParam(
                currentWeatherData,
                'PrecipitationType',
                'Type of precipitation'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'PrecipitationSummary.PastHour',
                'Precipitation summary / past hour'
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.sectionPaper}></Paper>
              {renderMultiValuedParam(
                currentWeatherData,
                'PrecipitationSummary.Past3Hours',
                'Precipitation summary / past 3 hours'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'PrecipitationSummary.Past6Hours',
                'Precipitation summary / past 6 hours'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'PrecipitationSummary.Past9Hours',
                'Precipitation summary / past 9 hours'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'PrecipitationSummary.Past12Hours',
                'Precipitation summary / past 12 hours'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'PrecipitationSummary.Past18Hours',
                'Precipitation summary / past 18 hours'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'PrecipitationSummary.Past24Hours',
                'Precipitation summary / past 24 hours'
              )}
            </Grid>
          </Grid>
        </div>
      </Paper>

      <Paper className={classes.sectionPaper}>
        <Typography
          variant='h6'
          component='h3'
          className={classes.sectionHeader}
        >
          Other
        </Typography>
        <div className={classes.sectionMainWrapper}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              {renderMultiValuedParam(
                currentWeatherData,
                'Wind.Speed',
                'Wind speed'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'WindGust.Speed',
                'Wind gust speed'
              )}
              <br />
              {renderSingleValuedParam(
                currentWeatherData,
                'UVIndex',
                'Ultraviolet radiation from the sun'
              )}
              {renderSingleValuedParam(
                currentWeatherData,
                'UVIndexText',
                'Ultraviolet radiation from the sun text'
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.sectionPaper}></Paper>
              {renderMultiValuedParam(
                currentWeatherData,
                'DewPoint',
                'Dew point'
              )}
              {renderMultiValuedParam(
                currentWeatherData,
                'Visibility',
                'Visibility'
              )}
              {renderMultiValuedParam(currentWeatherData, 'Ceiling', 'Ceiling')}
              {renderMultiValuedParam(
                currentWeatherData,
                'Pressure',
                'Pressure'
              )}
              {renderSingleValuedParam(
                currentWeatherData,
                'EpochTime',
                'Time of observation'
              )}

              {renderSingleValuedParam(
                currentWeatherData,
                'IsDayTime',
                'isDayTime'
              )}
              {renderSingleValuedParam(
                currentWeatherData,
                'RelativeHumidity',
                'Relative humidity'
              )}
              {renderSingleValuedParam(
                currentWeatherData,
                'Wind.Direction.Degrees',
                'Wind direction in Azimuth degrees'
              )}
              {renderSingleValuedParam(
                currentWeatherData,
                'ObstructionsToVisibility',
                'Obstructions to visibility'
              )}
              {renderSingleValuedParam(
                currentWeatherData,
                'CloudCover',
                'Cloud cover'
              )}
              {renderSingleValuedParam(
                currentWeatherData,
                'PressureTendency.LocalizedText',
                'Pressure tendency'
              )}
            </Grid>
          </Grid>
        </div>
      </Paper>
      <Spinner isVisible={isLoading} isSmall={false} />
    </div>
  );
}

export default AdditionalWeatherDetails;
