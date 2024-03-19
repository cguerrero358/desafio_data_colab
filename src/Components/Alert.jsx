import React from 'react';
import PropTypes from 'prop-types';

export const Alert = ({ mensaje, type }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {mensaje}
    </div>
  );
};

Alert.propTypes = {
  mensaje: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;