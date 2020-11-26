import cloneDeep from 'lodash.clonedeep';
import { useMutation, useQuery, queryCache } from '@common/hooks/dataHandlerHooks';
import { routes } from '@/api';
import { GET_ROUTES } from '@common/constants/queries';

export function useGetRoutes(id, options) {
  return useQuery(GET_ROUTES, () => routes.getAllRoutes(id), options);
}
export function useGetRouteGroups(id, options) {
  const returnedFromQuery = useGetRoutes(id, options);
  if (returnedFromQuery.data) {
    return {
      ...returnedFromQuery,
      data: returnedFromQuery.data.filter((route) => Array.isArray(route.children)),
    };
  }
  return returnedFromQuery;
}

export function useChangeRoutesOrders(options) {
  return useMutation(routes.changeRoutesOrders, options);
}

export function useAddRoute(options) {
  return useMutation(routes.addRoute, {
    onSuccess: ({ id, name: text, parent }) => {
      queryCache.setQueryData(
        GET_ROUTES,
        (oldData) => {
          const newData = cloneDeep(oldData);
          if (parent) {
            const rs = newData.map((route) => {
              if (route.children && route.id === parent) {
                route.children.push({
                  id, text,
                });
              }
              return route;
            });
            return rs;
          }
          return [
            ...newData,
            {
              id, text,
            },
          ];
        },
      );
    },
    ...options,
  });
}

export function useAddRouteGroup(options) {
  return useMutation(routes.addRouteGroup, {
    onSuccess: ({ id, label: title }) => {
      queryCache.setQueryData(
        GET_ROUTES,
        (oldData) => [
          ...oldData,
          {
            id, title, children: [],
          },
        ],
      );
    },
    ...options,
  });
}
