/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import MenuList from './MenuList';

export default function SortableMenu({ onSortChange, ...props }) {
  return (
    <MenuList
      onSortEnd={(...args) => onSortChange(null, ...args)}
      onSortChange={onSortChange}
      distance={5}
      useDragHandle
      {...props}
    />
  );
}

SortableMenu.propTypes = {
  onSortChange: PropTypes.func.isRequired,
};
