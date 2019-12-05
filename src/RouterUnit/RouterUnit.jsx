import React from 'react';
import { Redirect, Router, Switch, Route } from 'react-router-dom';

import history from 'componentsCommon/history';
import { ROUTES } from 'constants/routes';

import { WeatherPage } from 'pages/WeatherPage';
import { FavoritesPage } from 'pages/FavoritesPage';

function RootRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={`/${ROUTES.WEATHER}`} exact component={WeatherPage} />
        <Route path={`/${ROUTES.FAVORITES}`} exact component={FavoritesPage} />
        <Redirect from='*' to={`/${ROUTES.REDIRECT_URL}`} />
      </Switch>
    </Router>
  );
}

export default RootRouter;
