import React from 'react';
import { Skeleton } from 'antd';
import { useParams } from 'react-router-dom';

import RequestDetails from '@common/components/RequestDetails';
import { useGetTimelineRequestDetails } from '@common/hooks/dataHooks/timeline';

export default function MatchedRouteRequest() {
  const { requestId } = useParams();
  const { data, isLoading } = useGetTimelineRequestDetails(requestId);

  if (isLoading) return <Skeleton active />;

  const { request: { headers, body, queryStrings } } = data;

  return (
    <RequestDetails
      headers={headers}
      body={body}
      queryStrings={queryStrings}
    />
  );
}
