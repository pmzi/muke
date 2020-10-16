import React from 'react';

import { Menu } from 'antd';

import { useHistory } from 'react-router-dom';

import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';

import { WORKSPACE } from '../common/constants/urls';

export default function WorkspaceList() {
  const history = useHistory();

  function onClick({ key }) {
    history.push(WORKSPACE(key));
  }

  return (
    <Menu
      className="h-full w-full"
      mode="inline"
      inlineCollapsed
      onClick={onClick}
    >
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        Option 1
      </Menu.Item>
      <Menu.Item key="2" icon={<DesktopOutlined />}>
        Option 2
      </Menu.Item>
      <Menu.Item key="3" icon={<ContainerOutlined />}>
        Option 3
      </Menu.Item>
    </Menu>
  );
}
