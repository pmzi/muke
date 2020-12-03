import { requestState } from './serverRelated';

// eslint-disable-next-line import/prefer-default-export
export const requestStatusColorMap = {
  [requestState.SUCCESS]: 'green',
  [requestState.FAIL]: 'red',
  [requestState.PENDING]: 'gray',
  [requestState.PROXY]: 'blue',
};
