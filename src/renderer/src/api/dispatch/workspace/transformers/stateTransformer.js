import swapKeyValuesToNewObject from '@/api/common/utilities/swapKeyValuesToNewObject';
import { workspaceState } from '@common/constants/serverRelated';

const STATE_NUMBER_TO_STRING_ENUM = {
  0: workspaceState.PAUSED,
  1: workspaceState.RUNNING,
};

const STATE_TEXT_TO_NUMBER_ENUM = swapKeyValuesToNewObject(STATE_NUMBER_TO_STRING_ENUM);

export function transformStateNumberToText(state) {
  return STATE_NUMBER_TO_STRING_ENUM[state];
}

export function transformStateTextToNumber(state) {
  return STATE_TEXT_TO_NUMBER_ENUM[state];
}
