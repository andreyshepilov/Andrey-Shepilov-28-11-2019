import React from 'react';
import { ToastContainer } from 'react-toastify';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/styles';

import customTheme from 'theme';
import { RouterUnit } from 'RouterUnit';

import 'react-toastify/dist/ReactToastify.css';

function TopLevelLayout() {
  return (
    <StylesProvider>
      <MuiThemeProvider theme={customTheme}>
        <CssBaseline />
        <ToastContainer />
        <RouterUnit />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default TopLevelLayout;
