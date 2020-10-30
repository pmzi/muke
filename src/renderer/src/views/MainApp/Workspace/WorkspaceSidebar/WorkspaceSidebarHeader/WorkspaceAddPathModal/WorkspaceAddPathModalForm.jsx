import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Form, Radio, Input, Select,
} from 'antd';

const { Option } = Select;

const typeOptions = [
  {
    label: 'Group', value: 'group',
  },
  {
    label: 'Route', value: 'route',
  },
];

const matchTypeOptions = [
  {
    label: 'Path', value: 'path',
  },
  {
    label: 'URL', value: 'url',
  },
];

export default function WorkspaceAddPathModalForm({ form, onFinish }) {
  const [values, setValues] = useState({
    type: 'route',
    routeName: '',
    route: '',
    routeType: 'path',
    group: '',
    routeMethod: 'get',
    matchType: 'exact',
  });

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

  function handleOnFinish() {
    onFinish(values);
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

  const formGroupContent = (
    <Form.Item name="group" label="Label">
      <Input placeholder="Authentication" />
    </Form.Item>
  );

  const formRouteContent = (
    <>
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
    </>
  );

  const contentToShow = values.type === 'route' ? formRouteContent : formGroupContent;

  return (
    <Form form={form} onValuesChange={handleValuesChange} layout="vertical" onFinish={handleOnFinish} initialValues={values}>
      <Form.Item name="type" label="Type">
        <Radio.Group options={typeOptions} optionType="button" />
      </Form.Item>
      { contentToShow }
    </Form>
  );
}

WorkspaceAddPathModalForm.propTypes = {
  form: PropTypes.shape({
    resetFields: PropTypes.func,
    submit: PropTypes.func,
  }).isRequired,
  onFinish: PropTypes.func.isRequired,
};
