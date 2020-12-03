import React from 'react';
import { Collapse, Skeleton } from 'antd';
import { useParams } from 'react-router-dom';

import Prism from '@common/components/Prism';
import KeyValueItems from '@common/components/KeyValueItems';
import { useGetTimelineRequestDetails } from '@common/hooks/dataHooks/timeline';

const { Panel } = Collapse;

export default function MatchedRouteRequest() {
  const { requestId } = useParams();
  const { data, isLoading } = useGetTimelineRequestDetails(requestId);

  if (isLoading) return <Skeleton active />;

  const { response: { headers, body } } = data;

  return (
    <Collapse
      ghost
      expandIconPosition="right"
    >
      <Panel header="Headers" key="1">
        <KeyValueItems
          items={headers}
        />
      </Panel>
      <Panel header="Body" key="2">
        <Prism component="pre" className="h-full w-full">
          { body }
        </Prism>
      </Panel>
    </Collapse>
  );
}
