import React, { useState } from 'react';
import classNames from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { SettingsApplications } from '@material-ui/icons';

import { NavMain } from './NavMain';
import { SystemSelector } from './SystemSelector';

import useStyles from './Header.styles';

function Header() {
  const classes = useStyles();

  const [settingsIsOpened, setSettingsIsOpened] = useState(false);

  const onSettingsToggle = () => {
    setSettingsIsOpened(!settingsIsOpened);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarContentWrapper}>
            <div className={classes.topRow}>
              <div className={classes.logoMain}>Weather app</div>
              <div className={classes.controlsWrapper}>
                <div className={classes.navWrapper}>
                  <NavMain />
                </div>
                <IconButton
                  aria-label='settings'
                  onClick={onSettingsToggle}
                  className={classes.button}
                >
                  <SettingsApplications />
                </IconButton>
              </div>
            </div>
            <div
              className={classNames(classes.bottomRow, {
                [classes.bottomRowActive]: settingsIsOpened,
              })}
            >
              <SystemSelector />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
