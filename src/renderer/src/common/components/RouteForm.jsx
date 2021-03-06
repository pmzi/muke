import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Form, Radio, Input, Select,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';

import { controllerPropType } from '@common/utilities/createController';
import { useGetRouteGroups } from '@common/hooks/dataHooks';

const { Option } = Select;

const matchTypeOptions = [
  {
    label: 'Path', value: 'path',
  },
  {
    label: 'URL', value: 'url',
  },
];

const defaultInitialValues = {
  name: '',
  path: '',
  matchWith: 'path',
  method: 'get',
  matchType: 'exact',
  parent: '',
};

export default function RouteForm({
  submitController, onSubmitToServer, resetController, initialValues,
}) {
  const { workspace } = useParams();
  const [form] = useForm();
  const [values, setValues] = useState(initialValues);
  const { data: routeGroups, isLoading: isLoadingRouteGroups } = useGetRouteGroups(workspace);

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

  function handleChange(changedValues) {
    setValues((data) => ({
      ...data,
      ...changedValues,
    }));
  }

  function handleValuesChange(changedField, allFields) {
    handleChange(allFields);
  }

  function handlePathTypeChange(value) {
    handleChange({
      method: value,
    });
  }

  function handlePathMatchTypeChange(value) {
    handleChange({
      matchType: value,
    });
  }

  function submitFormToServer() {
    onSubmitToServer(values);
  }

  const pathTypes = (
    <Select defaultValue={initialValues.method} onChange={handlePathTypeChange}>
      <Select.Option value="get">GET</Select.Option>
      <Select.Option value="post">POST</Select.Option>
      <Select.Option value="put">PUT</Select.Option>
      <Select.Option value="patch">PATCH</Select.Option>
      <Select.Option value="delete">DELETE</Select.Option>
    </Select>

  );
  const pathMatchTypes = (
    <Select defaultValue={initialValues.matchType} onChange={handlePathMatchTypeChange}>
      <Select.Option value="exact">Exact</Select.Option>
      <Select.Option value="contain">Contains</Select.Option>
      <Select.Option value="regex">RegEx</Select.Option>
    </Select>
  );

  const routeGroupsOptions = isLoadingRouteGroups ? null : routeGroups.map(
    (gp) => <Option key={gp.id} value={gp.id}>{gp.title}</Option>,
  );

  return (
    <Form form={form} onValuesChange={handleValuesChange} layout="vertical" onFinish={submitFormToServer} initialValues={initialValues}>
      <Form.Item name="name" label="Name">
        <Input placeholder="Login" />
      </Form.Item>
      <Form.Item name="parent" label="Parent">
        <Select loading={isLoadingRouteGroups}>
          <Option disabled value="">None</Option>
          {routeGroupsOptions}
        </Select>
      </Form.Item>
      <Form.Item name="path" label="Path">
        <Input addonBefore={pathTypes} addonAfter={pathMatchTypes} placeholder="/some-endpoint" />
      </Form.Item>
      <Form.Item name="matchWith" label="Match With">
        <Radio.Group options={matchTypeOptions} optionType="button" />
      </Form.Item>
    </Form>
  );
}

RouteForm.propTypes = {
  onSubmitToServer: PropTypes.func.isRequired,
  submitController: controllerPropType('submit').isRequired,
  resetController: controllerPropType('reset').isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    matchWith: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    matchType: PropTypes.string.isRequired,
    parent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
};

RouteForm.defaultProps = {
  initialValues: defaultInitialValues,
};
