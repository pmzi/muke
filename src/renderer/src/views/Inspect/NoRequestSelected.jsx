import React from 'react';
import { Empty } from 'antd';
import requestImage from '@/assets/images/request.svg';

export default function NoRequestSelected() {
  return (
    <div className="flex items-center justify-center h-full">
      <Empty
        imageStyle={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        image={requestImage}
        description="No Request Selected!"
      />
    </div>
  );
}
