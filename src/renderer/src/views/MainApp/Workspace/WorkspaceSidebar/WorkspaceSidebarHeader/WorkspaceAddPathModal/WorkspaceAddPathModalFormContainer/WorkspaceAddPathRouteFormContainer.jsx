import React from 'react';
import PropTypes from 'prop-types';

import { controllerPropType } from '@common/utilities/createController';
import notify from '@services/notify';
import { useAddRoute } from '@common/hooks/dataHooks';
import RouteForm from '@common/components/RouteForm';

export default function WorkspaceAddPathRouteFormContainer({
  onFinish, submitController, onLoadingChange, resetController,
}) {
  const [addRoute] = useAddRoute();

  function submitFormToServer(values) {
    onLoadingChange(true);
    addRoute(values).then(() => {
      onFinish();
      notify.success('Route added!');
    }).catch(({ message }) => {
      notify.error(message);
    }).finally(() => {
      onLoadingChange(false);
    });
  }

  return (
    <RouteForm
      onSubmitToServer={submitFormToServer}
      resetController={resetController}
      submitController={submitController}
    />
  );
}

WorkspaceAddPathRouteFormContainer.propTypes = {
  onFinish: PropTypes.func.isRequired,
  onLoadingChange: PropTypes.func.isRequired,
  submitController: controllerPropType('submit').isRequired,
  resetController: controllerPropType('reset').isRequired,
};
