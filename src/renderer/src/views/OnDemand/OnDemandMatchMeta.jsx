import React from 'react';

import { Descriptions, Skeleton, Tag } from 'antd';

import RequestTag from '@common/components/RequestTag';
import { useParams } from 'react-router-dom';
import { useGetOnDemandResponseDetails } from '@common/hooks/dataHooks';

export default function OnDemandMatchMeta() {
  const { requestId } = useParams();
  const { data, isLoading } = useGetOnDemandResponseDetails(requestId);

  if (isLoading) return <Skeleton active />;

  const {
    name, path, time, method, matchType, matchWith,
  } = data;
  const title = `${name} Route`;

  return (
    <Descriptions title={title} layout="horizontal">
      <Descriptions.Item label="Address" span={3}>{ path }</Descriptions.Item>
      <Descriptions.Item label="Time" span={3}>{ time }</Descriptions.Item>
      <Descriptions.Item label="Route Type"><RequestTag method={method} /></Descriptions.Item>
      <Descriptions.Item label="Match Type">
        <Tag color="green">{ matchType }</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="Address Match"><Tag color="orange">{ matchWith }</Tag></Descriptions.Item>
    </Descriptions>
  );
}
