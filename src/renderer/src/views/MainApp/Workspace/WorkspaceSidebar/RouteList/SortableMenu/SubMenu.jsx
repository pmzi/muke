/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Menu } from 'antd';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import MenuHandle from './MenuHandle';
import MenuItem from './MenuItem';

const SubMenuItems = SortableContainer(({ items, title, ...props }) => (
  <Menu.SubMenu
    className="list-none"
    {...props}
    title={(
      <span className="flex items-center">
        <MenuHandle />
        {title}
      </span>
    )}
  >
    {items.map(({ id, ...menuItemProps }, index) => (
      <MenuItem key={id} index={index} {...menuItemProps} />
    ))}
  </Menu.SubMenu>
));

export default SortableElement(SubMenuItems);
