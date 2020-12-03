import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Form, Checkbox } from 'antd';

import { useEditRoute } from '@common/hooks/dataHooks';

export default function RouteGeneralSettings({ data }) {
  const { routeId } = useParams();
  const [editRoute] = useEditRoute();

  function handleValuesChange(changedValues) {
    editRoute({ ...changedValues, id: routeId });
  }

  return (
    <Form
      name="routeGeneralForm"
      initialValues={data}
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
  data: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    onDemandResponse: PropTypes.bool.isRequired,
  }).isRequired,
};
