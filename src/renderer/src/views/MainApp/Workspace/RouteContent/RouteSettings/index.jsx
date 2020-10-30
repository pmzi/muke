import React, { useState } from 'react';

import { Tabs } from 'antd';

import TabTitle from '@/common/components/TabTitle';
import ResponseEditor from '@common/components/ResponseEditor';
import RouteGeneralSettings from './RouteGeneralSettings';
import RouteHeadersSettings from './RouteHeadersSettings';

import './style.scss';

export default function RouteSettings() {
  const [onDemandResponse, setOnDemandResponse] = useState(false);

  return (
    <Tabs className="RouteSettings h-full" defaultActiveKey="1" animated>
      <Tabs.TabPane
        tab={<TabTitle title="General" />}
        key="1"
      >
        <div className="px-6">
          <RouteGeneralSettings onDemandChanged={setOnDemandResponse} />
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane tab={<TabTitle title="Response Headers" />} key="2">
        <div className="px-6">
          <RouteHeadersSettings />
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane className="h-full" disabled={onDemandResponse} tab={<TabTitle title="Response" />} key="3">
        <ResponseEditor />
      </Tabs.TabPane>
    </Tabs>
  );
}
