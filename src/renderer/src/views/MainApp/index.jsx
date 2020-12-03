import React from 'react';
import Router from './Router';
import WorkspaceList from './WorkspaceList';
import Footer from './Footer';
import OnDemandListenerWrapper from './OnDemandListenerWrapper';

function App() {
  return (
    <OnDemandListenerWrapper>
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
    </OnDemandListenerWrapper>
  );
}

export default App;
