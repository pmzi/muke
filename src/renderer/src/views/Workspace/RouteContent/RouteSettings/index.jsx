import React from 'react';

import { Tabs } from 'antd';

import TabTitle from './TabTitle';

export default function RouteSettings() {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane
          tab={<TabTitle title="Tab 1" />}
          key="1"
        >
          Tab 1
        </Tabs.TabPane>
        <Tabs.TabPane tab={<TabTitle title="Tab 1" />} disabled key="2">
          Tab 2
        </Tabs.TabPane>
        <Tabs.TabPane tab={<TabTitle title="Tab 1" />} key="3">
          Tab 3
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
