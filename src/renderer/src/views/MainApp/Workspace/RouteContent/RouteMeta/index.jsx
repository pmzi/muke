import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions, Tag, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { useGetRoute } from '@common/hooks/dataHooks';
import RequestTag from '@common/components/RequestTag';
import RouteMetaLoading from './RouteMetaLoading';
import RouteEditModal from './RouteEditModal';

export default function RouteMeta() {
  const { routeId } = useParams();
  const { isLoading, data } = useGetRoute(routeId);
  const [shouldShowEditModal, setShouldShowEditModal] = useState(false);

  if (isLoading) return <RouteMetaLoading />;

  function showEditModal() {
    setShouldShowEditModal(true);
  }
  function hideEditModal() {
    setShouldShowEditModal(false);
  }

  const {
    method, matchType, path, matchWith, name,
  } = data;

  const title = `${name} Route`;

  const editButton = (
    <Button onClick={showEditModal} type="text" shape="circle" icon={<EditOutlined />} />
  );
  return (
    <>
      <Descriptions title={title} layout="horizontal" extra={editButton}>
        <Descriptions.Item label="Route Type"><RequestTag method={method} /></Descriptions.Item>
        <Descriptions.Item label="Match Type">
          <Tag color="green">{ matchType }</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Address Match"><Tag color="orange">{ matchWith }</Tag></Descriptions.Item>
        <Descriptions.Item label="Address" span={3}>{ path }</Descriptions.Item>
      </Descriptions>

      <RouteEditModal onHide={hideEditModal} show={shouldShowEditModal} />
    </>
  );
}
