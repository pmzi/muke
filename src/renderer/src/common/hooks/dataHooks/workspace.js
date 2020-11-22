import { useMutation } from '@common/hooks/dataHandlerHooks';
import { workspace } from '@/api';

// eslint-disable-next-line import/prefer-default-export
export function useAddWorkspace(options) {
  return useMutation(workspace.createWorkspace, options);
}
