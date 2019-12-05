import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { get } from 'lodash';

import * as locationsActions from 'store/locations/actions';

import { AutocompleteUnit } from 'componentsCommon/AutocompleteUnit';

import useStyles from './LocationAutocomplete.styles';

function LocationAutocomplete() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const suggestionsData = useSelector(
    state => state.locations.suggestions.data
  );

  const suggestionsDataSequence = useSelector(
    state => state.locations.suggestions.dataSequence
  );

  const isLoading = useSelector(state => state.locations.suggestions.isLoading);

  const [options, setOptions] = useState([]);
  const [isValidationError, setIsValidationError] = useState(false);

  const englishOnlyRegexp = /^[a-zA-Z]+$/;

  useEffect(() => {
    setOptions(
      suggestionsDataSequence.map(el => {
        const cityName = get(suggestionsData, `[${el}].LocalizedName`, '');
        const administrativeAreaName = get(
          suggestionsData,
          `[${el}].AdministrativeArea.LocalizedName`,
          ''
        );
        const countryName = get(
          suggestionsData,
          `[${el}].Country.LocalizedName`,
          ''
        );
        return {
          value: el,
          label: `${cityName}, ${administrativeAreaName}, ${countryName}`,
        };
      })
    );
  }, [suggestionsData, suggestionsDataSequence]);

  const onInputChange = e => {
    if (!englishOnlyRegexp.test(e.target.value)) {
      setIsValidationError(true);
    } else if (
      get(e, 'keyCode', '') !== 37 &&
      get(e, 'keyCode', '') !== 38 &&
      get(e, 'keyCode', '') !== 39 &&
      get(e, 'keyCode', '') !== 13 &&
      get(e, 'keyCode', '') !== 40
    ) {
      setIsValidationError(false);

      dispatch(
        locationsActions.suggestionsGet.start({
          query: e.target.value,
        })
      );
    }
  };

  const onSelectOption = selected => {
    if (selected !== null) {
      dispatch(
        locationsActions.selectedLocationSet({
          locationKey: selected.value,
        })
      );
    }
  };

  return (
    <div className={classes.rootWrapper}>
      <div
        className={classNames(classes.autocompleteUnitWrapper, {
          [classes.autocompleteUnitWrapperWithError]: isValidationError,
        })}
      >
        <AutocompleteUnit
          isLoading={isLoading}
          options={options}
          onInputChange={onInputChange}
          onSelectOption={onSelectOption}
          name={'Location'}
          isDisabled={false}
          defaultValue={''}
          placeholder={'Enter location'}
        />
      </div>

      {isValidationError ? (
        <div className={classes.autocompleteErrorMessage}>
          Enter location name, only english letters available!
        </div>
      ) : null}
    </div>
  );
}

export default LocationAutocomplete;
