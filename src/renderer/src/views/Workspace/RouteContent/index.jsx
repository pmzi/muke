import React from 'react';

import RouteMeta from './RouteMeta';
import RouteSettings from './RouteSettings';

export default function RouteContent() {
  return (
    <div className="flex flex-col">
      <div className="flex-grow p-6">
        <RouteMeta />
      </div>
      <div className="flex-grow-2 border-t border-gray-500">
        <RouteSettings />
      </div>
    </div>
  );
}
