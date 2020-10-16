import React from 'react';

import ServerInfo from './ServerInfo/index';
import ServerActions from './ServerActions';

export default function Workspace() {
  return (
    <div className="grid grid-cols-workspace grid-rows-workspace">
      <header className="col-span-2 border-b border-grey-500 border-solid mb-4 px-4 flex justify-between items-center">
        <ServerInfo />

        <ServerActions />
      </header>
      <aside>
        Aside
      </aside>
      <div>
        Content
      </div>
    </div>
  );
}
