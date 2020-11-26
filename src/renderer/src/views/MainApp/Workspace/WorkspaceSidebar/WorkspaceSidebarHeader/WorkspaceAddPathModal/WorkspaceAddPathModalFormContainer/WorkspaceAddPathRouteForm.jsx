import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Radio, Input, Select,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';

const { Option } = Select;

const matchTypeOptions = [
  {
    label: 'Path', value: 'path',
  },
  {
    label: 'URL', value: 'url',
  },
];

export default function WorkspaceAddPathRouteForm({ onFinish, submitController }) {
  const [form] = useForm();
  const [values, setValues] = useState({
    routeName: '',
    route: '',
    routeType: 'path',
    routeMethod: 'get',
    matchType: 'exact',
    parentGroup: '',
  });

  useEffect(() => {
    const onSubmit = () => {
      form.submit();
    };
    submitController.onSubmit(onSubmit);

    return () => submitController.removeOnSubmit(onSubmit);
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
      routeMethod: value,
    });
  }

  function handlePathMatchTypeChange(value) {
    handleChange({
      matchType: value,
    });
  }

  const pathTypes = (
    <Select defaultValue={values.routeMethod} onChange={handlePathTypeChange}>
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
    <Form form={form} onValuesChange={handleValuesChange} layout="vertical" onFinish={onFinish} initialValues={values}>
      <Form.Item name="routeName" label="Name">
        <Input placeholder="Login" />
      </Form.Item>
      <Form.Item name="parentGroup" label="Parent">
        <Select defaultValue="none">
          <Option value="none">None</Option>
          <Option value="parent1">Parent 1</Option>
        </Select>
      </Form.Item>
      <Form.Item name="route" label="Path">
        <Input addonBefore={pathTypes} addonAfter={pathMatchTypes} placeholder="/some-endpoint" />
      </Form.Item>
      <Form.Item name="routeType" label="Match With">
        <Radio.Group options={matchTypeOptions} optionType="button" />
      </Form.Item>
    </Form>
  );
}

WorkspaceAddPathRouteForm.propTypes = {
  onFinish: PropTypes.func.isRequired,
  submitController: PropTypes.shape({
    onSubmit: PropTypes.func.isRequired,
    removeOnSubmit: PropTypes.func.isRequired,
  }).isRequired,
};
