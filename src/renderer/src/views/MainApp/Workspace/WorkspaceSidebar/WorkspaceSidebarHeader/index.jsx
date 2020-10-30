import React, { useState } from 'react';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';

import WorkspaceAddPathModal from './WorkspaceAddPathModal';

export default function WorkspaceSidebarHeader() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  function showModal() {
    setShouldShowModal(true);
  }

  return (
    <div className="flex items-center">
      <ArrowLeftOutlined className="mr-4 text-xl cursor-pointer" />
      Title
      <PlusOutlined onClick={showModal} className="ml-auto text-green-600 cursor-pointer" />

      <WorkspaceAddPathModal show={shouldShowModal} onVisibilityChange={setShouldShowModal} />
    </div>
  );
}
