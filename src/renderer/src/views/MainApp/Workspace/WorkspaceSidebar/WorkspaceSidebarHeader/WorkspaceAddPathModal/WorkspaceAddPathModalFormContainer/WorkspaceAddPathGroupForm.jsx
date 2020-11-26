import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';

export default function WorkspaceAddPathGroupForm({ onFinish, submitController }) {
  const [form] = useForm();
  const [values, setValues] = useState({
    group: '',
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

  return (
    <Form form={form} onValuesChange={handleValuesChange} layout="vertical" onFinish={onFinish} initialValues={values}>
      <Form.Item name="group" label="Label">
        <Input placeholder="Authentication" />
      </Form.Item>
    </Form>
  );
}

WorkspaceAddPathGroupForm.propTypes = {
  onFinish: PropTypes.func.isRequired,
  submitController: PropTypes.shape({
    onSubmit: PropTypes.func.isRequired,
    removeOnSubmit: PropTypes.func.isRequired,
  }).isRequired,
};
