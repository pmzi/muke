import React from 'react';
import { Button } from 'antd';

import OnDemandMatchMeta from './OnDemandMatchMeta';
import OnDemandDetails from './OnDemandDetails';

export default function OnDemand() {
  return (
    <div className="flex flex-col h-screen">
      <div className="p-4">
        <OnDemandMatchMeta />
      </div>
      <div className="flex-1 min-h-0">
        <OnDemandDetails />
      </div>
      <div className="flex justify-between p-4">
        <Button>Proxy</Button>
        <Button type="primary">Respond</Button>
      </div>
    </div>
  );
}
