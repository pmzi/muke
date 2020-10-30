import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import WorkspaceAddPathModal from './WorkspaceAddPathModal';

export default function WorkspaceSidebarHeader() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  function showModal() {
    setShouldShowModal(true);
  }

  return (
    <div className="flex items-center text-xl">
      Routes
      <PlusOutlined onClick={showModal} className="ml-auto text-green-600 cursor-pointer" />

      <WorkspaceAddPathModal show={shouldShowModal} onVisibilityChange={setShouldShowModal} />
    </div>
  );
}
