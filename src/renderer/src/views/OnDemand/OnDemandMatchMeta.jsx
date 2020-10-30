import React from 'react';

import { Descriptions, Tag } from 'antd';

import RequestTag from '@common/components/RequestTag';

export default function OnDemandMatchMeta() {
  return (
    <Descriptions title="Login Route" layout="horizontal">
      <Descriptions.Item label="Address" span={3}>/auth/user</Descriptions.Item>
      <Descriptions.Item label="Time" span={3}>11:30</Descriptions.Item>
      <Descriptions.Item label="Route Type"><RequestTag method="get" /></Descriptions.Item>
      <Descriptions.Item label="Match Type">
        <Tag color="green">Exact</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="Address Match"><Tag color="orange">Path</Tag></Descriptions.Item>
    </Descriptions>
  );
}
