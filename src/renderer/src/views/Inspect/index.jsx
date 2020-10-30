import React from 'react';

import RequestTimeline from './RequestTimeline';
import RequestDetails from './RequestDetails';

export default function Inspect() {
  return (
    <div className="flex h-screen">
      <RequestTimeline className="flex-1 border-r border-grey-500 border-solid" />

      <RequestDetails className="flex-1" />
    </div>
  );
}
