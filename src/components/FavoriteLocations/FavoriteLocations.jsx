import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import FavoriteLocationCard from 'components/FavoriteLocationCard/FavoriteLocationCard';

import useStyles from './FavoriteLocations.styles';

function FavoriteLocations() {
  const classes = useStyles();

  const favoriteLocations = useSelector(
    state => state.config.favoriteLocations.list
  );

  const renderFavoriteLocations = () => {
    return (
      <ul className={classes.favoriteLocationsList}>
        {favoriteLocations.map(el => {
          return (
            <li key={el} className={classes.favoriteLocationsListItem}>
              <FavoriteLocationCard locationKey={el} />
            </li>
          );
        })}
      </ul>
    );
  };

  return <Fragment>{renderFavoriteLocations()}</Fragment>;
}

export default FavoriteLocations;
