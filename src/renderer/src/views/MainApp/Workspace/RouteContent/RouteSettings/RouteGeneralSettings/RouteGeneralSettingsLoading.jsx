import React from 'react';
import { Skeleton } from 'antd';

export default function RouteGeneralSettings() {
  return (
    <div className="flex flex-col">
      <Skeleton.Input style={{ width: 200 }} active className="mb-4" />
      <Skeleton.Input style={{ width: 200 }} active className="mb-4" />
      <Skeleton.Input style={{ width: 200 }} active className="mb-4" />
      <Skeleton.Input style={{ width: 200 }} active />
    </div>
  );
}
