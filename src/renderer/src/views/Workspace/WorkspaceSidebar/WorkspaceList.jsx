import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { ROUTE } from '@common/constants/urls';

export default function WorkspaceList() {
  const history = useHistory();
  const { workspace } = useParams();

  function goToRoute() {
    history.push(ROUTE(
      {
        workspaceId: workspace,
        routeId: 1,
      },
    ));
  }

  return (
    <Menu
      mode="inline"
    >
      <Menu.SubMenu
        key="sub1"
        title={(
          <span>
            <MailOutlined />
            <span>Navigation One</span>
          </span>
      )}
      >
        <Menu.ItemGroup key="g1" title="Item 1">
          <Menu.Item onClick={goToRoute} key="1">Option 1</Menu.Item>
          <Menu.Item onClick={goToRoute} key="2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Item 2">
          <Menu.Item onClick={goToRoute} key="3">Option 3</Menu.Item>
          <Menu.Item onClick={goToRoute} key="4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item onClick={goToRoute} key="5">Option 5</Menu.Item>
        <Menu.Item onClick={goToRoute} key="6">Option 6</Menu.Item>
        <Menu.SubMenu key="sub3" title="Menu.SubMenu">
          <Menu.Item onClick={goToRoute} key="7">Option 7</Menu.Item>
          <Menu.Item onClick={goToRoute} key="8">Option 8</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="sub4"
        title={(
          <span>
            <SettingOutlined />
            <span>Navigation Three</span>
          </span>
      )}
      >
        <Menu.Item onClick={goToRoute} key="9">Option 9</Menu.Item>
        <Menu.Item onClick={goToRoute} key="10">Option 10</Menu.Item>
        <Menu.Item onClick={goToRoute} key="11">Option 11</Menu.Item>
        <Menu.Item onClick={goToRoute} key="12">Option 12</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}
