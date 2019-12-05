import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import theme from 'theme';

const styles = {
  heading: {
    color: theme.palette.error.main,
  },
  errorMessage: {
    marginBottom: '20px',
    fontWeight: 'bold',
  },
};

class PageErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: JSON.stringify(error) };
  }

  render() {
    const { classes } = this.props;

    if (this.state.hasError) {
      return (
        <div>
          <h2 className={classes.heading}>Error!</h2>
          <div className={classes.errorMessage}>
            Message: {this.state.errorMessage}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withStyles(styles)(PageErrorBoundary);
