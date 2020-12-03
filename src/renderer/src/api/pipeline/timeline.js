import { TIMELINE_RECEIVE, TIMELINE_REQ_STATUS_CHANGE } from '@common/constants/channels';
import pipeline from '@services/pipeline';

function onReceiveTimeline(cb) {
  return pipeline.on(TIMELINE_RECEIVE, cb);
}

function onTimelineRequestStatusChange(cb) {
  return pipeline.on(TIMELINE_REQ_STATUS_CHANGE, cb);
}

export default {
  onReceiveTimeline,
  onTimelineRequestStatusChange,
};
