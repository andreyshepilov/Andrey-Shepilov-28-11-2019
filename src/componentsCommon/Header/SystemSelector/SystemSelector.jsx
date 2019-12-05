import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Switch from '@material-ui/core/Switch';

import * as configActions from 'store/config/actions';

import { MeasurementSystem } from 'store/config/enums';

function SystemSelector() {
  const dispatch = useDispatch();

  const isMetricSystem = useSelector(
    state => state.config.measurementSystemIsMetric
  );

  const toggleIsMetric = () => {
    dispatch(
      configActions.measurementSystemSet({
        measurementSystem:
          isMetricSystem === true
            ? MeasurementSystem.IMPERIAL
            : MeasurementSystem.METRIC,
      })
    );
  };

  return (
    <div>
      {/* TODO: use custom radiobutton */}
      <span>Imperial</span>
      <Switch size='small' checked={isMetricSystem} onChange={toggleIsMetric} />
      <span>Metric</span>
    </div>
  );
}

export default SystemSelector;
