import { useQuery } from '@common/hooks/dataHandlerHooks';
import { onDemandResponse } from '@/api/dispatch';
import { GET_ON_DEMAND_RESPONSE_DETAILS } from '@common/constants/queries';

// eslint-disable-next-line import/prefer-default-export
export function useGetOnDemandResponseDetails(id, options) {
  return useQuery(
    [GET_ON_DEMAND_RESPONSE_DETAILS, id], onDemandResponse.getOnDemandResponseDetails, options,
  );
}
