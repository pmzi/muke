import { useQuery } from '@common/hooks/dataHandlerHooks';
import { timeline } from '@/api/dispatch';
import { GET_TIMELINE_REQUEST_DETAILS } from '@common/constants/queries';

// eslint-disable-next-line import/prefer-default-export
export function useGetTimelineRequestDetails(id, options) {
  return useQuery([GET_TIMELINE_REQUEST_DETAILS, id], timeline.getTimelineRequestDetails, options);
}
