import { useMutation, useQuery, queryCache } from '@common/hooks/dataHandlerHooks';
import { workspace } from '@/api/dispatch';
import { GET_ALL_WORKSPACES, GET_WORKSPACE } from '@common/constants/queries';

export function useAddWorkspace(options) {
  return useMutation(workspace.createWorkspace, {
    onSuccess: (data) => {
      queryCache.setQueryData(GET_ALL_WORKSPACES, (oldData) => ([
        ...oldData,
        data,
      ]));
    },
    ...options,
  });
}

export function useGetWorkspaces(options) {
  return useQuery(GET_ALL_WORKSPACES, workspace.getAllWorkspaces, options);
}

export function useGetWorkspaceInfo(id, options) {
  return useQuery([GET_WORKSPACE, id], () => workspace.getWorkspaceInfo(id), options);
}

export function useDeleteWorkspace(options) {
  return useMutation(workspace.deleteWorkspace, {
    onSuccess: (id) => {
      queryCache.setQueryData(
        GET_ALL_WORKSPACES,
        (oldData) => oldData.filter(({ id: wId }) => Number(id) !== wId),
      );
      queryCache.removeQueries(
        [GET_WORKSPACE, id],
        {
          exact: true,
        },
      );
    },
    ...options,
  });
}

export function useChangeWorkspaceState(options) {
  return useMutation(workspace.changeWorkspaceState, {
    onSuccess: ({ id, state }) => {
      queryCache.setQueryData(
        [GET_WORKSPACE, id],
        (oldData) => ({
          ...oldData,
          state,
        }),
      );
    },
    ...options,
  });
}

export function useGetWorkspaceState(id, options) {
  const returnedFromQuery = useGetWorkspaceInfo(id, options);
  if (returnedFromQuery.data) {
    return {
      ...returnedFromQuery,
      data: returnedFromQuery.data.state,
    };
  }
  return returnedFromQuery;
}
