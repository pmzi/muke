import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const headersPropTypes = PropTypes.arrayOf(
  PropTypes.shape(
    {
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    },
  ),
);
