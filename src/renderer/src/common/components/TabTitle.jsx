import React from 'react';
import PropTypes from 'prop-types';

export default function TabTitle({ title }) {
  return (
    <div className="px-4">
      { title }
    </div>
  );
}

TabTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
