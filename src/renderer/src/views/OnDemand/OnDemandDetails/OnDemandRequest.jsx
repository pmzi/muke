import React from 'react';
import { useParams } from 'react-router-dom';
import { Skeleton } from 'antd';

import RequestDetails from '@common/components/RequestDetails';
import { useGetOnDemandResponseDetails } from '@common/hooks/dataHooks';

export default function OnDemandRequest() {
  const { requestId } = useParams();
  const { data, isLoading } = useGetOnDemandResponseDetails(requestId);

  if (isLoading) return <Skeleton active />;

  const { request: { headers, body, queryStrings } } = data;

  return (
    <RequestDetails headers={headers} body={body} queryStrings={queryStrings} />
  );
}
