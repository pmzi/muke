import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Radio,
} from 'antd';

import { controllerPropType } from '@common/utilities/createController';
import WorkspaceAddPathRouteFormContainer from './WorkspaceAddPathRouteFormContainer';
import WorkspaceAddPathGroupForm from './WorkspaceAddPathGroupForm';

const typeOptions = [
  {
    label: 'Group', value: 'group',
  },
  {
    label: 'Route', value: 'route',
  },
];

export default function WorkspaceAddPathModalFormContainer(
  {
    submitController, onFinish, onLoadingChange, resetController,
  },
) {
  const [type, setType] = useState('route');

  function handleTypeChange({ target: { value } }) {
    setType(value);
  }

  const propsToPassToForm = {
    submitController, onFinish, onLoadingChange, resetController,
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  const formToShow = type === 'route' ? <WorkspaceAddPathRouteFormContainer {...propsToPassToForm} /> : <WorkspaceAddPathGroupForm {...propsToPassToForm} />;

  return (
    <>
      <div className="mb-6">
        <Radio.Group value={type} onChange={handleTypeChange} options={typeOptions} optionType="button" />
      </div>

      {formToShow}
    </>
  );
}

WorkspaceAddPathModalFormContainer.propTypes = {
  onFinish: PropTypes.func.isRequired,
  onLoadingChange: PropTypes.func.isRequired,
  submitController: controllerPropType('submit').isRequired,
  resetController: controllerPropType('reset').isRequired,
};
