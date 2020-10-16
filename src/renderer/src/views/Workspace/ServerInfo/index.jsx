import React, { useState } from 'react';

import { InfoCircleOutlined } from '@ant-design/icons';
import ServerInfoModal from './ServerInfoModal/index';

export default function ServerInfo() {
  const [show, setShow] = useState(false);

  function showModal() {
    setShow(true);
  }

  return (
    <div className="flex items-center">
      Bazaar
      <InfoCircleOutlined className="ml-2 cursor-pointer" onClick={showModal} />

      <ServerInfoModal
        show={show}
        onVisibilityChange={setShow}
      />
    </div>
  );
}
