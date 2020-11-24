import React from 'react';
import { Skeleton } from 'antd';

function RouteListLoadingItem() {
  return <Skeleton.Input className="mb-2 w-full" active />;
}

export default function RouteListLoading() {
  return (
    <div className="px-8 py-4">
      <RouteListLoadingItem />
      <RouteListLoadingItem />
      <div className="pl-8">
        <RouteListLoadingItem />
        <RouteListLoadingItem />
        <RouteListLoadingItem />
        <RouteListLoadingItem />
      </div>
      <RouteListLoadingItem />
      <RouteListLoadingItem />
    </div>
  );
}
