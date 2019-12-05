import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import { Favorite, FavoriteBorder } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

import * as configActions from 'store/config/actions';

import { Spinner } from 'componentsCommon/Spinner';

import useStyles from './LocationInfo.styles';

function LocationInfo() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [isFavoriteLocation, setIsFavoriteLocation] = useState(false);

  const favoriteLocations = useSelector(
    state => state.config.favoriteLocations.list
  );

  const isLoading = useSelector(state => state.locations.suggestions.isLoading);

  const suggestionsData = useSelector(
    state => state.locations.suggestions.data
  );

  const selectedLocationKey = useSelector(
    state => state.locations.suggestions.selectedLocationKey
  );

  const currentLocation = get(suggestionsData, selectedLocationKey, {});

  const city = get(currentLocation, 'LocalizedName', '');
  const country = get(currentLocation, 'Country.LocalizedName', '');
  const administrativeArea = get(
    currentLocation,
    'AdministrativeArea.LocalizedName',
    ''
  );

  useEffect(() => {
    favoriteLocations.includes(selectedLocationKey)
      ? setIsFavoriteLocation(true)
      : setIsFavoriteLocation(false);
  }, [favoriteLocations, selectedLocationKey]);

  const handleFavorite = () => {
    isFavoriteLocation
      ? dispatch(
          configActions.favoriteLocationRemove({
            locationKey: selectedLocationKey,
          })
        )
      : dispatch(
          configActions.favoriteLocationSet({
            locationKey: selectedLocationKey,
            country,
            administrativeArea,
            city,
          })
        );
  };

  return (
    <div className={classes.root}>
      <div className={classes.locationInfoWrapper}>
        {city ? <div>{city}</div> : null}
        <div>
          {country ? <span>{country}</span> : null}
          {country && administrativeArea ? <span>{', '}</span> : null}
          {administrativeArea ? <span>{administrativeArea}</span> : null}
        </div>
      </div>

      <Button
        variant='contained'
        color='primary'
        className={classes.favButton}
        startIcon={isFavoriteLocation ? <Favorite /> : <FavoriteBorder />}
        onClick={handleFavorite}
      >
        {isFavoriteLocation ? 'Remove from favorites' : 'Add to favorites'}
      </Button>
      <Spinner isVisible={isLoading} isSmall={true} />
    </div>
  );
}

export default LocationInfo;
