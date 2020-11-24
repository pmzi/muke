import { useMutation, useQuery } from '@common/hooks/dataHandlerHooks';
import { routes } from '@/api';
import { GET_ROUTES } from '@common/constants/queries';

export function useGetRoutes(id, options) {
  return useQuery(GET_ROUTES, () => routes.getAllRoutes(id), options);
}

export function useChangeRoutesOrders(options) {
  return useMutation(routes.changeRoutesOrders, options);
}
