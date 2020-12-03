import React from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions, Skeleton, Tag } from 'antd';

import RequestTag from '@/common/components/RequestTag';
import { useGetTimelineRequestDetails } from '@common/hooks/dataHooks/timeline';
import { requestStatusColorMap } from '@common/constants/colorMaps';

export default function () {
  const { requestId } = useParams();
  const { data, isLoading } = useGetTimelineRequestDetails(requestId);

  if (isLoading) return <Skeleton active />;

  const {
    path, name, status, matchType, matchWith, method,
  } = data;
  const title = `${name} Route`;

  return (
    <Descriptions column={2} title={title} layout="horizontal">
      <Descriptions.Item label="Address" span={2}>{path}</Descriptions.Item>
      <Descriptions.Item label="Route Type"><RequestTag method={method} /></Descriptions.Item>
      <Descriptions.Item label="Match Type">
        <Tag color="green">{matchType}</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="Address Match"><Tag color="orange">{matchWith}</Tag></Descriptions.Item>
      <Descriptions.Item label="Response Status"><Tag color={requestStatusColorMap[status]}>{status}</Tag></Descriptions.Item>
    </Descriptions>
  );
}
