import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import notify from '@services/notify';
import { Skeleton } from 'antd';

import { controllerPropType } from '@common/utilities/createController';
import { useEditRoute, useGetRoute } from '@common/hooks/dataHooks';
import RouteForm from '@common/components/RouteForm';

export default function RouteEditModalFormContainer({
  onFinish, submitController, onLoadingChange, resetController,
}) {
  const { routeId } = useParams();
  const [editRoute] = useEditRoute();
  const { data, isLoading } = useGetRoute(routeId);

  if (isLoading) return <Skeleton title={false} active />;

  function submitFormToServer(values) {
    onLoadingChange(true);
    editRoute({ id: routeId, ...values }).then(() => {
      onFinish();
      notify.success('Route edited!');
    }).catch(({ message }) => {
      notify.error(message);
    }).finally(() => {
      onLoadingChange(false);
    });
  }

  const {
    name,
    path,
    matchWith,
    method,
    matchType,
    parent,
  } = data;

  const initialValues = {
    name,
    path,
    matchWith,
    method,
    matchType,
    parent,
  };

  return (
    <RouteForm
      onSubmitToServer={submitFormToServer}
      resetController={resetController}
      submitController={submitController}
      initialValues={initialValues}
    />
  );
}

RouteEditModalFormContainer.propTypes = {
  onFinish: PropTypes.func.isRequired,
  onLoadingChange: PropTypes.func.isRequired,
  submitController: controllerPropType('submit').isRequired,
  resetController: controllerPropType('reset').isRequired,
};
