/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { Divider } from 'antd';

import { useHistory } from 'react-router-dom';

import {
  PlusOutlined,
} from '@ant-design/icons';

import { WORKSPACE } from '@common/constants/urls';
import bazaarLogo from '@/assets/images/bazaar.png';
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
      <div className="h-full w-32 border-r border-gray-300 border-solid flex items-center flex-col pt-4 pb-4">
        <div role="button" onClick={goToWorkspace} className="transform hover:scale-110 duration-500 cursor-pointer rounded-full border-4 border-blue-300 border-solid h-20 w-20 flex items-center justify-center mb-4">
          <img alt="server" className="w-12" src={bazaarLogo} />
        </div>
        <div role="button" onClick={goToWorkspace} className="transform hover:scale-110 duration-500 cursor-pointer rounded-full border border-gray-300 border-solid h-20 w-20 flex items-center justify-center mb-4">
          <img alt="server" className="w-12" src={bazaarLogo} />
        </div>
        <div role="button" onClick={goToWorkspace} className="transform hover:scale-110 duration-500 cursor-pointer rounded-full border border-gray-300 border-solid h-20 w-20 flex items-center justify-center">
          <img alt="server" className="w-12" src={bazaarLogo} />
        </div>

        <Divider className="mt-4 mb-4" />

        <div role="button" onClick={showAddNewServerModal} className="transform hover:scale-110 duration-500 cursor-pointer rounded-full border border-gray-300 border-solid h-20 w-20 flex items-center justify-center mb-4">
          <PlusOutlined className="w-12" />
        </div>
      </div>

      <WorkspaceListAddModal showModal={showModal} onCloseModal={closeAddNewServerModal} />
    </>
  );
}
