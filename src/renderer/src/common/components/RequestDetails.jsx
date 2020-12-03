import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';

import Prism from '@common/components/Prism';
import KeyValueItems from '@common/components/KeyValueItems';
import { headersPropTypes } from '@common/utilities/propTypes';

const { Panel } = Collapse;

export default function RequestDetails({ headers, queryStrings, body }) {
  return (
    <Collapse
      ghost
      expandIconPosition="right"
    >
      <Panel header="Headers" key="1">
        <KeyValueItems
          items={headers}
        />
      </Panel>
      <Panel header="Query Strings" key="2">
        <KeyValueItems
          items={queryStrings}
        />
      </Panel>
      <Panel header="Body" key="3">
        <Prism component="pre" className="h-full w-full">
          { body }
        </Prism>
      </Panel>
    </Collapse>
  );
}

RequestDetails.propTypes = {
  headers: headersPropTypes.isRequired,
  body: PropTypes.string.isRequired,
  queryStrings: PropTypes.arrayOf(
    PropTypes.shape(
      {
        key: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
};
