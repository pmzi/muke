import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Form, Input,
  message as $message,
} from 'antd';

import { required, url, number } from '@common/utilities/formValidations';
import { workspace } from '@/api';

export default function WorkspaceListAddModal({ showModal, onCloseModal }) {
  const [form] = Form.useForm();

  function submitForm() {
    form.submit();
  }

  async function addServer({
    name, address, port, proxy,
  }) {
    try {
      await workspace.createWorkspace({
        name, address, port, proxy,
      });

      $message.success('Server Created Successfully!');

      onCloseModal();
    } catch ({ message }) {
      $message.error(message);
    }
  }

  return (
    <Modal
      title="Add New Server"
      visible={showModal}
      onOk={submitForm}
      onCancel={onCloseModal}
    >
      <Form
        form={form}
        onFinish={addServer}
        layout="vertical"
        name="addNewServer"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[required('Please enter server name!')]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[required('Please enter server address!')]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Port"
          name="port"
          rules={[required('Please enter server port!'), number()]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item rules={[url()]} extra="If none of the routes matched the incoming request, request will be proxied to the given server" name="proxy" label="Proxy Server">
          <Input placeholder="http://site.com/api" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

WorkspaceListAddModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
