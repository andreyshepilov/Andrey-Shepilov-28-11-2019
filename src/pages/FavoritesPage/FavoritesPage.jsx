import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as weatherActions from 'store/weather/actions';

import Typography from '@material-ui/core/Typography';

import { CommonLayout } from 'layouts/CommonLayout';
import { PageErrorBoundary } from 'componentsCommon/PageErrorBoundary';
import { FavoriteLocations } from 'components/FavoriteLocations';

import useStyles from './FavoritesPage.styles';

function FavoritesPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherActions.getFavsSet());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CommonLayout>
      <Typography variant='h5' component='h1' className={classes.pageHeading}>
        Favorite locations
      </Typography>

      <PageErrorBoundary>
        <FavoriteLocations />
      </PageErrorBoundary>
    </CommonLayout>
  );
}

export default FavoritesPage;
