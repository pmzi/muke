import React from 'react';
import { Skeleton } from 'antd';

function HeaderLoadingItem() {
  return (
    <div className="flex justify-around mb-2">
      <Skeleton.Input className="flex-grow" active />
      <Skeleton.Input className="flex-grow ml-2" active />
    </div>
  );
}

export default function RouteHeadersSettingsLoading() {
  return (
    <div className="px-4">
      <HeaderLoadingItem />
      <HeaderLoadingItem />
      <HeaderLoadingItem />
    </div>
  );
}
