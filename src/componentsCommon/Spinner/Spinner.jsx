import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Spinner.css';

Spinner.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired,
};

function Spinner({ isVisible, isSmall }) {
  return (
    <div
      className={classNames('spinnerOverlay', {
        'spinnerOverlayHidden': !isVisible,
      })}
    >
      <div className={classNames('loader', {
          'loaderSmall': isSmall,
        })}
      >Loading...</div>
    </div>
  );
}

export default Spinner;
