import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';

import notify from '@services/notify';
import { useAddRouteGroup } from '@common/hooks/dataHooks';
import { controllerPropType } from '@common/utilities/createController';

const initialValues = {
  group: '',
};

export default function WorkspaceAddPathGroupForm({
  onFinish, submitController, onLoadingChange, resetController,
}) {
  const [form] = useForm();
  const [addRouteGroup] = useAddRouteGroup();
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    const onSubmit = () => {
      form.submit();
    };

    const onReset = () => {
      form.resetFields();
    };
    submitController.onSubmit(onSubmit);

    resetController.onReset(onReset);

    return () => {
      submitController.removeOnSubmit(onSubmit);
      resetController.removeOnReset(onReset);
    };
  }, []);

  function submitFormToServer() {
    onLoadingChange(true);
    addRouteGroup(values.group).then(() => {
      onFinish();
      notify.success('Route group added!');
    }).catch(({ message }) => {
      notify.error(message);
    }).finally(() => {
      onLoadingChange(false);
    });
  }

  function handleChange(changedValues) {
    setValues((data) => ({
      ...data,
      ...changedValues,
    }));
  }

  function handleValuesChange(changedField, allFields) {
    handleChange(allFields);
  }

  return (
    <Form form={form} onValuesChange={handleValuesChange} layout="vertical" onFinish={submitFormToServer} initialValues={initialValues}>
      <Form.Item name="group" label="Label">
        <Input placeholder="Authentication" />
      </Form.Item>
    </Form>
  );
}

WorkspaceAddPathGroupForm.propTypes = {
  onFinish: PropTypes.func.isRequired,
  onLoadingChange: PropTypes.func.isRequired,
  submitController: controllerPropType('submit').isRequired,
  resetController: controllerPropType('reset').isRequired,
};
