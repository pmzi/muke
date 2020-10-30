import React from 'react';
import { Collapse } from 'antd';
import Prism from '@common/components/Prism';
import KeyValueItems from '@common/components/KeyValueItems';

const { Panel } = Collapse;

export default function RequestDetails() {
  return (
    <Collapse
      ghost
      expandIconPosition="right"
    >
      <Panel header="Headers" key="1">
        <KeyValueItems
          items={[
            {
              key: 'hey',
              value: 'hi',
            },
          ]}
        />
      </Panel>
      <Panel header="Query Strings" key="2">
        <KeyValueItems
          items={[
            {
              key: 'hey',
              value: 'hi',
            },
          ]}
        />
      </Panel>
      <Panel header="Body" key="3">
        <Prism component="pre" className="h-full w-full">
          hey
        </Prism>
      </Panel>
    </Collapse>
  );
}
