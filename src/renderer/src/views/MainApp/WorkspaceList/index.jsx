/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { Divider } from 'antd';

import { useHistory } from 'react-router-dom';

import {
  PlusOutlined,
} from '@ant-design/icons';

import { WORKSPACE } from '@common/constants/urls';
import { useGetWorkspaces } from '@common/hooks/dataHooks';
import WorkspaceListAddModal from './WorkspaceListAddModal';
import WorkspaceListLoading from './WorkspaceListLoading';
import WorkspaceListItem from './WorkspaceListItem';

export default function WorkspaceList() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading } = useGetWorkspaces();

  function goToWorkspace({ key }) {
    history.push(WORKSPACE(key));
  }

  function showAddNewServerModal() {
    setShowModal(true);
  }

  function closeAddNewServerModal() {
    setShowModal(false);
  }

  const content = isLoading ? <WorkspaceListLoading /> : data.map(({ id, image }) => (
    <WorkspaceListItem image={image} key={id} onClick={() => goToWorkspace(id)} />
  ));
  return (
    <>
      <div className="h-full w-32 border-r border-gray-300 border-solid flex items-center flex-col pt-4 pb-4">
        { content }

        <Divider className="mt-4 mb-4" />

        <div role="button" onClick={showAddNewServerModal} className="transform hover:scale-110 duration-500 cursor-pointer rounded-full border border-gray-300 border-solid h-20 w-20 flex items-center justify-center mb-4">
          <PlusOutlined className="w-12" />
        </div>
      </div>

      <WorkspaceListAddModal showModal={showModal} onCloseModal={closeAddNewServerModal} />
    </>
  );
}
