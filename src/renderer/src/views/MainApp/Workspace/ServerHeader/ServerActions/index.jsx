import React from 'react';
import { useParams } from 'react-router-dom';

import { useChangeWorkspaceState, useGetWorkspaceState } from '@common/hooks/dataHooks';
import { workspaceState } from '@common/constants/serverRelated';
import ServerInfoTag from './ServerInfoTag';
import ServerInspectButton from './ServerInspectButton';
import ServerAction from './ServerAction';
import ServerActionsLoading from './ServerActionsLoading';

export default function ServerActions() {
  const { workspace } = useParams();
  const { data: serverStatus, isLoading } = useGetWorkspaceState(workspace);
  const [changeWorkspaceState, { isLoading: isStateBeingChanged }] = useChangeWorkspaceState();

  function startServer() {
    changeWorkspaceState({ id: workspace, state: workspaceState.RUNNING });
  }

  function pauseServer() {
    changeWorkspaceState({ id: workspace, state: workspaceState.PAUSED });
  }

  if (isLoading || isStateBeingChanged) return (<ServerActionsLoading />);

  return (
    <div className="flex items-center">
      <ServerInfoTag serverStatus={serverStatus} />
      <ServerInspectButton className="mr-3 ml-5" serverStatus={serverStatus} />
      <ServerAction
        pauseServer={pauseServer}
        startServer={startServer}
        serverStatus={serverStatus}
      />
    </div>
  );
}
