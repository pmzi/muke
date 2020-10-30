import React from 'react';
import { Empty } from 'antd';
import selectRequestImage from '@/assets/images/selectRequest.svg';

export default function NoRequestSelected() {
  return (
    <div className="flex items-center justify-center h-full">
      <Empty
        imageStyle={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        image={selectRequestImage}
        description="No Request Selected!"
      />
    </div>
  );
}
