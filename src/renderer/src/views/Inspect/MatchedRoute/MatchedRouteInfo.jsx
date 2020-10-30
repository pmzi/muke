import React from 'react';
import { Descriptions, Tag } from 'antd';

import RequestTag from '@/common/components/RequestTag';

export default function () {
  return (
    <Descriptions column={2} title="Login Route" layout="horizontal">
      <Descriptions.Item label="Address" span={2}>/auth/user</Descriptions.Item>
      <Descriptions.Item label="Route Type"><RequestTag method="get" /></Descriptions.Item>
      <Descriptions.Item label="Match Type">
        <Tag color="green">Exact</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="Address Match"><Tag color="orange">Path</Tag></Descriptions.Item>
      <Descriptions.Item label="Response Status"><Tag color="green">Success</Tag></Descriptions.Item>
      <Descriptions.Item label="Response Content Type">JSON</Descriptions.Item>
    </Descriptions>
  );
}
