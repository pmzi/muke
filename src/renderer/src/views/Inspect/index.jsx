import React from 'react';

import RequestTimeline from './RequestTimeline';
import InspectRouter from './InspectRouter';

export default function Inspect() {
  return (
    <div className="flex h-screen">
      <RequestTimeline className="flex-1 border-r border-grey-500 border-solid" />

      <div className="flex-1">
        <InspectRouter />
      </div>
    </div>
  );
}
