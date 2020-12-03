import React from 'react';

import RequestTimelineContainer from './RequestTimelineContainer';
import InspectRouter from './InspectRouter';

export default function Inspect() {
  return (
    <div className="flex h-screen">
      <RequestTimelineContainer className="flex-1 border-r border-grey-500 border-solid" />

      <div className="flex-1">
        <InspectRouter />
      </div>
    </div>
  );
}
