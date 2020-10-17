import React, { useState } from 'react';

import { Tabs } from 'antd';

import TabTitle from './TabTitle';
import RouteGeneralSettings from './RouteGeneralSettings';
import RouteHeadersSettings from './RouteHeadersSettings';

export default function RouteSettings() {
  const [onDemandResponse, setOnDemandResponse] = useState(false);

  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane
        tab={<TabTitle title="General" />}
        key="1"
      >
        <div className="px-6">
          <RouteGeneralSettings onDemandChanged={setOnDemandResponse} />
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane disabled={onDemandResponse} tab={<TabTitle title="Request Headers" />} key="2">
        <div className="px-6">
          <RouteHeadersSettings />
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane tab={<TabTitle title="Tab 1" />} key="3">
        Tab 3
      </Tabs.TabPane>
    </Tabs>
  );
}
