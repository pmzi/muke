import React from 'react';
import PropTypes from 'prop-types';
import { Timeline } from 'antd';
import { useHistory, useParams } from 'react-router-dom';

import { INSPECT_REQUEST_DETAIL } from '@common/constants/urls';
import { REQUEST_METHODS } from '@common/constants/common';
import { requestState } from '@common/constants/serverRelated';
import { requestStatusColorMap } from '@common/constants/colorMaps';
import RequestTimelineItemContent from './RequestTimelineItemContent';

export default function RequestTimeline({ className, items }) {
  const history = useHistory();
  const { serverId } = useParams();

  function showDetails(requestId) {
    history.push(INSPECT_REQUEST_DETAIL({
      id: requestId,
      serverId,
    }));
  }

  const timelineItemsList = items.map((item) => {
    const isPending = item.status === requestState.PENDING;
    const clickableClass = isPending ? '' : 'cursor-pointer';
    const onClick = isPending ? null : () => showDetails(item.id);

    return (
      <Timeline.Item
        key={item.id}
        className={clickableClass}
        onClick={onClick}
        color={requestStatusColorMap[item.status]}
        label={item.time}
      >
        <RequestTimelineItemContent path={item.path} method={item.method} />
      </Timeline.Item>
    );
  });

  const noItemsClassName = items.length ? '' : ' items-center';

  return (
    <div className={`${className}${noItemsClassName} flex flex-col justify-end overflow-y-auto pr-8 pt-8`}>
      <Timeline pending="Waiting for Request..." mode="left" reverse className="min-h-0">
        {timelineItemsList}
      </Timeline>
    </div>
  );
}

RequestTimeline.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['success', 'fail', 'pending']).isRequired,
    path: PropTypes.string.isRequired,
    method: PropTypes.oneOf(REQUEST_METHODS).isRequired,
  })).isRequired,
};

RequestTimeline.defaultProps = {
  className: '',
};
