import React from 'react';
import { Empty } from 'antd';

import routeImage from '@/assets/images/route.svg';

export default function NoRouteSelected() {
  return (
    <div className="flex items-center justify-center h-full">
      <Empty
        imageStyle={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        image={routeImage}
        description="No Route Selected!"
      />
    </div>
  );
}
