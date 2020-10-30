import React from 'react';

import ServerHeader from './ServerHeader';
import WorkspaceSidebar from './WorkspaceSidebar';
import WorkspaceRouter from './WorkspaceRouter';

export default function Workspace() {
  return (
    <div className="h-full grid grid-cols-workspace grid-rows-workspace">
      <header className="col-span-2 border-b border-grey-500 border-solid px-10 flex justify-between items-center">
        <ServerHeader />
      </header>
      <aside className="h-full flex flex-col border-r border-grey-500 border-solid">
        <WorkspaceSidebar />
      </aside>
      <div>
        <WorkspaceRouter />
      </div>
    </div>
  );
}
