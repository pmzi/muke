/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Menu } from 'antd';
import { SortableElement } from 'react-sortable-hoc';

import MenuHandle from './MenuHandle';

export default SortableElement(
  ({ id, text, ...props }) => (
    <Menu.Item className="flex items-center" key={id} {...props}>
      <MenuHandle />
      {text}
    </Menu.Item>
  ),
);
