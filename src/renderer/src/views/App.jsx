import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Router from './Router';
import WorkspaceList from './WorkspaceList';

function App() {
  return (
    <MemoryRouter>
      <div className="h-screen grid grid-cols-layout grid-rows-layout">
        <aside className="row-span-2">
          <WorkspaceList />
        </aside>
        <main>
          <Router />
        </main>
        <footer className="flex justify-center items-center text-sm">
          <div>
            Made with
            {' '}
            <span aria-label="love" role="img">♥️</span>
            {' '}
            by
            {' '}
            <a href="https://github.com/pmzi" rel="noopener noreferrer" target="_blank">pmzi</a>
          </div>
        </footer>
      </div>
    </MemoryRouter>
  );
}

export default App;
