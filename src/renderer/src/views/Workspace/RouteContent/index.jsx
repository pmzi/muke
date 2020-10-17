import React from 'react';

import RouteMeta from './RouteMeta';
import RouteSettings from './RouteSettings';

export default function RouteContent() {
  return (
    <div className="flex flex-col overflow-hidden h-full">
      <div className="p-6">
        <RouteMeta />
      </div>
      <div className="flex-grow border-t border-gray-500 overflow-auto">
        <RouteSettings />
      </div>
    </div>
  );
}
