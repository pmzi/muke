import React from 'react';

import {
  Form, Input, Button,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { required } from '@common/utilities/formValidations';

export default function RouteHeadersSettings() {
  function onFinish(args) {
    console.log(args);
  }
  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="headers">
        {(fields, { add, remove }) => (
          <div>
            {fields.map((field) => (
              <div key={field.key} className="flex items-center mb-6">
                <Form.Item
                  name={[field.name, 'headerName']}
                  fieldKey={[field.fieldKey, 'headerName']}
                  rules={[required('Header name is required!')]}
                  className="flex-grow mb-0 mr-4"
                >
                  <Input placeholder="Header Name" />
                </Form.Item>
                <Form.Item
                  name={[field.name, 'headerValue']}
                  fieldKey={[field.fieldKey, 'headerValue']}
                  rules={[required('Header value is required!')]}
                  className="flex-grow mb-0"
                >
                  <Input placeholder="Header Value" />
                </Form.Item>

                <MinusCircleOutlined
                  className="w-10 text-red-600"
                  onClick={() => {
                    remove(field.name);
                  }}
                />
              </div>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => {
                  add();
                }}
                block
              >
                <PlusOutlined />
                {' '}
                Add header
              </Button>
            </Form.Item>
          </div>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
