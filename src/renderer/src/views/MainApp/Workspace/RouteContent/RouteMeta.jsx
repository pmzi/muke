import React from 'react';

import { Descriptions, Tag, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export default function RouteMeta() {
  const editButton = (
    <Button type="text" shape="circle" icon={<EditOutlined />} />
  );
  return (
    <Descriptions title="Login Route" layout="horizontal" extra={editButton}>
      <Descriptions.Item label="Route Type"><Tag color="red">GET</Tag></Descriptions.Item>
      <Descriptions.Item label="Match Type">
        <Tag color="green">Exact</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="Address Match"><Tag color="orange">Path</Tag></Descriptions.Item>
      <Descriptions.Item label="Address" span={3}>/auth/user</Descriptions.Item>
    </Descriptions>
  );
}
