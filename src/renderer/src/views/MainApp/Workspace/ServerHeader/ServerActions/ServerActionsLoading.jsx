import React from 'react';
import { Skeleton } from 'antd';

export default function ServerActionsLoading() {
  return (
    <Skeleton className="w-56" active title={false} paragraph={{ rows: 1, width: '100%' }} />
  );
}
