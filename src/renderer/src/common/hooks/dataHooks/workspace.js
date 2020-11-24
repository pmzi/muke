import { useMutation, useQuery, queryCache } from '@common/hooks/dataHandlerHooks';
import { workspace } from '@/api';
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

export function useDeleteWorkspace(id, options) {
  return useMutation(workspace.deleteWorkspace, {
    onSuccess: () => {
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
