import React from 'react';
import { Tabs } from 'antd';

import TabTitle from '@/common/components/TabTitle';

import OnDemandRequest from './OnDemandRequest';
import OnDemandResponse from './OnDemandResponse';

import './style.scss';

const { TabPane } = Tabs;

export default function OnDemandDetails() {
  return (
    <Tabs className="OnDemandDetails h-full" defaultActiveKey="2">
      <TabPane tab={<TabTitle title="Request" />} key="1">
        <div className="overflow-y-auto">
          <OnDemandRequest />
        </div>
      </TabPane>
      <TabPane tab={<TabTitle title="Response" />} key="2">
        <OnDemandResponse />
      </TabPane>
    </Tabs>
  );
}
