import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'antd';

export default function RouteGeneralSettings({ onDemandChanged }) {
  const [values, setValues] = useState({
    active: true,
    onDemandResponse: false,
  });

  useEffect(() => {
    onDemandChanged(values.onDemandResponse);
  }, [values.onDemandResponse]);

  function handleValuesChange(changedValues, allValues) {
    setValues(allValues);
  }

  return (
    <Form
      name="routeGeneralForm"
      initialValues={values}
      onValuesChange={handleValuesChange}
    >
      <Form.Item
        name="active"
        valuePropName="checked"
      >
        <Checkbox>Active</Checkbox>
      </Form.Item>
      <Form.Item
        name="onDemandResponse"
        valuePropName="checked"
      >
        <Checkbox>On Demand Response</Checkbox>
      </Form.Item>
    </Form>
  );
}

RouteGeneralSettings.propTypes = {
  onDemandChanged: PropTypes.func.isRequired,
};
