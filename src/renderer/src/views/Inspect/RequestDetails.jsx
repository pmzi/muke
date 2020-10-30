import React from 'react';
import PropTypes from 'prop-types';

export default function RequestDetails({ className }) {
  return (
    <div className={className}>
      Hey details
    </div>
  );
}

RequestDetails.propTypes = {
  className: PropTypes.string,
};

RequestDetails.defaultProps = {
  className: '',
};
