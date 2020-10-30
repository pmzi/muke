import React from 'react';

import WorkspaceList from './WorkspaceList';
import WorkspaceSidebarHeader from './WorkspaceSidebarHeader/index';

export default function WorkspaceSidebar() {
  return (
    <>
      <header className="px-8 py-4 border-b border-gray-500">
        <WorkspaceSidebarHeader />
      </header>

      <div className="flex-grow">
        <WorkspaceList />
      </div>
    </>
  );
}
