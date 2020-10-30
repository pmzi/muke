import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import WorkspaceList from './WorkspaceList';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen grid grid-cols-layout grid-rows-layout">
        <aside className="row-span-2">
          <WorkspaceList />
        </aside>
        <main>
          <Router />
        </main>
        <footer className="flex justify-center items-center text-sm border-t border-gray-400">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
