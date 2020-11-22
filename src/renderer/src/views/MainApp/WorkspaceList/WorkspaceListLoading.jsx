import React from 'react';

import { Skeleton } from 'antd';

export default function WorkspaceListLoading() {
  return (
    <>
      <Skeleton.Button active size={48} shape="circle" className="mb-4" />
      <Skeleton.Button active size={48} shape="circle" className="mb-4" />
      <Skeleton.Button active size={48} shape="circle" className="mb-4" />
      <Skeleton.Button active size={48} shape="circle" />
    </>
  );
}
