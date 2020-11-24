import React from 'react';
import { Skeleton, Divider } from 'antd';

export default function ServerInfoModalListLoading() {
  return (
    <>
      <Skeleton className="mb-6" title={false} paragraph={{ rows: 1 }} />
      <Skeleton className="mb-6" title={false} paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton className="mb-6" title={false} paragraph={{ rows: 1 }} />
      <Skeleton className="mb-6" title={false} paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton className="mb-6" title={false} paragraph={{ rows: 1 }} />
      <Skeleton title={false} paragraph={{ rows: 1 }} />
    </>
  );
}
