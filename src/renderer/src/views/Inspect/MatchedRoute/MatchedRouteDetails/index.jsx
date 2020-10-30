import React from 'react';
import { Tabs } from 'antd';

import TabTitle from '@/common/components/TabTitle';

import MatchedRouteRequest from './MatchedRouteRequest';
import MatchedRouteResponse from './MatchedRouteResponse';

import './style.scss';

const { TabPane } = Tabs;

export default function MatchedRouteDetails() {
  return (
    <Tabs className="MatchedRouteDetails h-full" defaultActiveKey="1">
      <TabPane tab={<TabTitle title="Request" />} key="1">
        <div className="overflow-y-auto">
          <MatchedRouteRequest />
        </div>
      </TabPane>
      <TabPane tab={<TabTitle title="Response" />} key="2">
        <MatchedRouteResponse />
      </TabPane>
    </Tabs>
  );
}
