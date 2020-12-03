import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from 'antd';

import { useGetRoute } from '@common/hooks/dataHooks';
import TabTitle from '@/common/components/TabTitle';
import RouteResponse from './RouteResponse';
import RouteGeneralSettings from './RouteGeneralSettings';
import RouteHeadersSettings from './RouteHeadersSettings';

import './style.scss';

export default function RouteSettings() {
  const { routeId } = useParams();
  const { data, isLoading } = useGetRoute(routeId);

  const onDemandResponse = isLoading || data.onDemandResponse;

  return (
    <Tabs className="RouteSettings h-full" defaultActiveKey="1" animated>
      <Tabs.TabPane
        tab={<TabTitle title="General" />}
        key="1"
      >
        <div className="px-6">
          <RouteGeneralSettings />
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane tab={<TabTitle title="Response Headers" />} key="2">
        <div className="px-6">
          <RouteHeadersSettings />
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane className="h-full" disabled={onDemandResponse} tab={<TabTitle title="Response" />} key="3">
        <RouteResponse />
      </Tabs.TabPane>
    </Tabs>
  );
}
