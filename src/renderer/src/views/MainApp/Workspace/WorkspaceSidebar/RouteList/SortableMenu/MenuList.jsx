/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Menu } from 'antd';
import { SortableContainer } from 'react-sortable-hoc';
import PropTypes from 'prop-types';

import SubMenu from './SubMenu';
import MenuItem from './MenuItem';

function MenuList({ onSortChange, items, ...menuProps }) {
  const childrenComponents = items.map(({ children = [], id, ...props }, index) => {
    if (children.length) {
      return (
        <SubMenu
          useDragHandle
          distance={5}
          onSortEnd={(...args) => onSortChange(id, ...args)}
          key={id}
          items={children}
          index={index}
          {...props}
        />
      );
    }
    return (<MenuItem key={id} index={index} {...props} />);
  });
  return (
    <Menu {...menuProps}>
      {childrenComponents}
    </Menu>
  );
}

MenuList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })),
  })).isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default SortableContainer(MenuList);
