import React, { useState } from 'react';

import { Menu } from 'antd';

import { useHistory } from 'react-router-dom';

import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  PlusOutlined,
} from '@ant-design/icons';

import { WORKSPACE } from '@common/constants/urls';
import WorkspaceListAddModal from './WorkspaceListAddModal';

export default function WorkspaceList() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  function goToWorkspace({ key }) {
    history.push(WORKSPACE(key));
  }

  function showAddNewServerModal() {
    setShowModal(true);
  }

  function closeAddNewServerModal() {
    setShowModal(false);
  }

  return (
    <>
      <Menu
        className="h-full w-full"
        mode="inline"
        inlineCollapsed
      >
        <Menu.Item onClick={goToWorkspace} key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item onClick={goToWorkspace} key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item onClick={goToWorkspace} key="3" icon={<ContainerOutlined />}>
          Option 3
        </Menu.Item>
        <Menu.Item onClick={showAddNewServerModal} className="text-green-600 font-bold" key="add" icon={<PlusOutlined />}>
          Add a New Server
        </Menu.Item>
      </Menu>

      <WorkspaceListAddModal showModal={showModal} onCloseModal={closeAddNewServerModal} />
    </>
  );
}
