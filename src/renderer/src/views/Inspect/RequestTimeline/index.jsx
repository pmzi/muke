import React from 'react';
import PropTypes from 'prop-types';
import { Timeline } from 'antd';

import RequestTimelineItemContent from './RequestTimelineItemContent';

const requestStatusColorMap = {
  success: 'green',
  fail: 'red',
  pending: 'blue',
};

export default function RequestTimeline({ className }) {
  return (
    <div className={`${className} flex flex-col justify-end overflow-y-auto pr-8 pt-8`}>
      <Timeline pending="Waiting for Request..." mode="left" reverse className="min-h-0">
        <Timeline.Item color={requestStatusColorMap.success} label="12:30">
          <RequestTimelineItemContent path="/index" method="get" />
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

RequestTimeline.propTypes = {
  className: PropTypes.string,
};

RequestTimeline.defaultProps = {
  className: '',
};
