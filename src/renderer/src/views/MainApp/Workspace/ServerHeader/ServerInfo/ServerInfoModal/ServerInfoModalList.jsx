import React from 'react';
import { List } from 'antd';
import { useParams } from 'react-router-dom';

import { useGetWorkspaceInfo } from '@common/hooks/dataHooks';
import ServerInfoModalListLoading from './ServerInfoModalListLoading';

function transformDataToListData({
  name, address, port,
}) {
  return [
    {
      name: 'Server Name',
      value: name,
    },
    {
      name: 'Server Address',
      value: address,
    },
    {
      name: 'Port',
      value: port,
    },
  ];
}

export default function ServerInfoModalList() {
  const { workspace } = useParams();
  const { data, isLoading } = useGetWorkspaceInfo(workspace);

  if (isLoading) return <ServerInfoModalListLoading />;

  const listData = transformDataToListData(data);

  return (
    <List
      itemLayout="horizontal"
      dataSource={listData}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.name}
            description={item.value}
          />
        </List.Item>
      )}
    />
  );
}
