import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Radio, Input, Select,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';

import notify from '@services/notify';
import { useAddRoute } from '@common/hooks/dataHooks';

const { Option } = Select;

const matchTypeOptions = [
  {
    label: 'Path', value: 'path',
  },
  {
    label: 'URL', value: 'url',
  },
];

export default function WorkspaceAddPathRouteForm({ onFinish, submitController, onLoadingChange }) {
  const [form] = useForm();
  const [addRoute] = useAddRoute();
  const [values, setValues] = useState({
    name: '',
    path: '',
    matchWith: 'path',
    method: 'get',
    matchType: 'exact',
    parent: '',
  });

  useEffect(() => {
    const onSubmit = () => {
      form.submit();
    };
    submitController.onSubmit(onSubmit);

    return () => submitController.removeOnSubmit(onSubmit);
  }, []);

  function submitFormToServer() {
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

  const pathTypes = (
    <Select defaultValue={values.method} onChange={handlePathTypeChange}>
      <Select.Option value="get">GET</Select.Option>
      <Select.Option value="post">POST</Select.Option>
      <Select.Option value="put">PUT</Select.Option>
      <Select.Option value="patch">PATCH</Select.Option>
      <Select.Option value="delete">DELETE</Select.Option>
    </Select>

  );
  const pathMatchTypes = (
    <Select defaultValue={values.matchType} onChange={handlePathMatchTypeChange}>
      <Select.Option value="exact">Exact</Select.Option>
      <Select.Option value="contain">Contains</Select.Option>
      <Select.Option value="regex">RegEx</Select.Option>
    </Select>
  );

  return (
    <Form form={form} onValuesChange={handleValuesChange} layout="vertical" onFinish={submitFormToServer} initialValues={values}>
      <Form.Item name="name" label="Name">
        <Input placeholder="Login" />
      </Form.Item>
      <Form.Item name="parent" label="Parent">
        <Select defaultValue="none">
          <Option value="none">None</Option>
          <Option value="parent1">Parent 1</Option>
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

WorkspaceAddPathRouteForm.propTypes = {
  onFinish: PropTypes.func.isRequired,
  onLoadingChange: PropTypes.func.isRequired,
  submitController: PropTypes.shape({
    onSubmit: PropTypes.func.isRequired,
    removeOnSubmit: PropTypes.func.isRequired,
  }).isRequired,
};
