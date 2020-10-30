import React from 'react';
import { Empty } from 'antd';
import serverImage from '@/assets/images/server.svg';

export default function NoWorkspaceSelected() {
  return (
    <div className="flex items-center justify-center h-full">
      <Empty
        imageStyle={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        image={serverImage}
        description="No Workspace Selected!"
      />
    </div>
  );
}
