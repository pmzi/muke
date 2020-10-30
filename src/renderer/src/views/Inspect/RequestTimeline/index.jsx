import React from 'react';
import PropTypes from 'prop-types';
import { Timeline } from 'antd';
import { useHistory, useParams } from 'react-router-dom';

import { INSPECT_REQUEST_DETAIL } from '@common/constants/urls';
import RequestTimelineItemContent from './RequestTimelineItemContent';

const requestStatusColorMap = {
  success: 'green',
  fail: 'red',
  pending: 'blue',
};

export default function RequestTimeline({ className }) {
  const history = useHistory();
  const { serverId } = useParams();

  function showDetails(requestId) {
    history.push(INSPECT_REQUEST_DETAIL({
      id: requestId,
      serverId,
    }));
  }

  return (
    <div className={`${className} flex flex-col justify-end overflow-y-auto pr-8 pt-8`}>
      <Timeline pending="Waiting for Request..." mode="left" reverse className="min-h-0">
        <Timeline.Item className="cursor-pointer" onClick={() => showDetails(1)} color={requestStatusColorMap.success} label="12:30">
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
