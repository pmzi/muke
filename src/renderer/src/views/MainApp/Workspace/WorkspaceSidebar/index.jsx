import React from 'react';

import RouteList from './RouteList';
import WorkspaceSidebarHeader from './WorkspaceSidebarHeader/index';

export default function WorkspaceSidebar() {
  return (
    <>
      <header className="px-8 py-4 border-b border-gray-500">
        <WorkspaceSidebarHeader />
      </header>

      <div className="flex-grow">
        <RouteList />
      </div>
    </>
  );
}
