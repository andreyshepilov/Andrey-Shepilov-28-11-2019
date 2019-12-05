import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Favorite, Cloud } from '@material-ui/icons';

import { ROUTES } from 'constants/routes';
import history from 'componentsCommon/history';

function NavMain(location) {
  const navItems = [
    {
      text: 'Weather',
      path: ROUTES.WEATHER,
      icon: <Cloud />,
    },
    {
      text: 'Favorites',
      path: ROUTES.FAVORITES,
      icon: <Favorite />,
    },
  ];

  return (
    <ButtonGroup variant='text' aria-label='main navigation'>
      {navItems.map(item => {
        return (
          <Button
            startIcon={item.icon}
            key={item.text}
            onClick={e => {
              const to = '/' + item.path;
              if (history.location.pathname !== to) {
                history.push(to);
              }
            }}
            selected={location.location.pathname === `/${item.path}`}
            color={
              location.location.pathname === `/${item.path}` ? 'secondary' : ''
            }
          >
            {item.text}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}

export default withRouter(NavMain);
