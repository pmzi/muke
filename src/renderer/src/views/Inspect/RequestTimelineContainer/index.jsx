import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { timeline } from '@/api/pipeline';
import RequestTimeline from './RequestTimeline';

export default function RequestTimelineContainer({ className }) {
  const [timelineItems, setTimelineItems] = useState([
    {
      id: 1,
      method: 'post',
      path: '/login',
      status: 'success',
      time: '11:45',
    },
    {
      id: 2,
      method: 'get',
      path: '/signUp',
      status: 'pending',
      time: '11:45',
    },
  ]);

  useEffect(() => {
    function addItemToTimeline(newItem) {
      setTimelineItems([
        ...timelineItems,
        newItem,
      ]);
    }

    function changeTimelineItem(itemToEdit) {
      const editedItems = timelineItems.map((item) => {
        if (item.id === itemToEdit.id) {
          return itemToEdit;
        }
        return item;
      });

      setTimelineItems(editedItems);
    }

    const dePipelineReceiveTimeline = timeline.onReceiveTimeline(addItemToTimeline);
    const dePipelineTimelineRequestStatusChange = timeline.onTimelineRequestStatusChange(
      changeTimelineItem,
    );

    return () => {
      dePipelineReceiveTimeline();
      dePipelineTimelineRequestStatusChange();
    };
  }, []);

  return <RequestTimeline items={timelineItems} className={className} />;
}

RequestTimelineContainer.propTypes = {
  className: PropTypes.string,
};

RequestTimelineContainer.defaultProps = {
  className: '',
};
