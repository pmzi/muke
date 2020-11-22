import React from 'react';
import PropTypes from 'prop-types';
import notify from '@services/notify';
import {
  Modal, Form, Input, Button,
} from 'antd';

import { required, url, number } from '@common/utilities/formValidations';
import { useAddWorkspace } from '@common/hooks/dataHooks';

export default function WorkspaceListAddModal({ showModal, onCloseModal }) {
  const [form] = Form.useForm();

  const [mutate, { isLoading }] = useAddWorkspace();

  function submitForm() {
    form.submit();
  }

  async function addServer({
    name, address, port, proxy,
  }) {
    try {
      await mutate({
        name, address, port, proxy,
      });

      notify.success('Server Created Successfully!');

      onCloseModal();
    } catch ({ message }) {
      notify.error(message);
    }
  }

  return (
    <Modal
      title="Add New Server"
      visible={showModal}
      onOk={submitForm}
      onCancel={onCloseModal}
      footer={[
        <Button key="back" onClick={onCloseModal}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={isLoading} onClick={submitForm}>
          Add Workspace
        </Button>,
      ]}
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
