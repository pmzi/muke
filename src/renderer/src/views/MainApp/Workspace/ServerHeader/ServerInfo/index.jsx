import React, { useState } from 'react';
import { Skeleton } from 'antd';

import { InfoCircleOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useGetWorkspaceInfo } from '@common/hooks/dataHooks';
import ServerInfoModal from './ServerInfoModal';

export default function ServerInfo() {
  const [show, setShow] = useState(false);
  const { workspace } = useParams();
  const { data, isLoading } = useGetWorkspaceInfo(workspace);

  function showModal() {
    setShow(true);
  }

  if (isLoading) return <Skeleton.Input />;

  return (
    <div className="flex items-center">
      { data.name }
      <InfoCircleOutlined className="ml-2 cursor-pointer" onClick={showModal} />

      <ServerInfoModal
        show={show}
        onVisibilityChange={setShow}
      />
    </div>
  );
}
