import { useMutation, useQuery, queryCache } from '@common/hooks/dataHandlerHooks';
import { workspace } from '@/api';
import { GET_ALL_WORKSPACES } from '@common/constants/queries';

// eslint-disable-next-line import/prefer-default-export
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
