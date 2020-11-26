import { useMutation, useQuery, queryCache } from '@common/hooks/dataHandlerHooks';
import { routes } from '@/api';
import { GET_ROUTES } from '@common/constants/queries';

export function useGetRoutes(id, options) {
  return useQuery(GET_ROUTES, () => routes.getAllRoutes(id), options);
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
          if (parent) {
            return oldData.map((route) => {
              if (route.children && route.id === parent) {
                route.children.push({
                  id, text,
                });
              }
              return route;
            });
          }
          return [
            ...oldData,
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
        (oldData) => {
          console.log([
            ...oldData,
            {
              id, title, children: [],
            },
          ]);
          return [
            ...oldData,
            {
              id, title, children: [],
            },
          ];
        },
      );
    },
    ...options,
  });
}
