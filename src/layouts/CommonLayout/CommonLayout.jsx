import React from 'react';

import { Header } from 'componentsCommon/Header';

import useStyles from './CommonLayout.styles';

function CommonLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.pageWrapper}>
      <Header />
      <div className={classes.mainContentWrapper}>{children}</div>
    </div>
  );
}

export default CommonLayout;
