import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Form, Input,
} from 'antd';

import { required } from '@common/utilities/formValidations';

export default function WorkspaceListAddModal({ showModal, onCloseModal }) {
  const [form] = Form.useForm();

  function addServer() {
    form.submit();
    // onCloseModal();
  }

  return (
    <Modal
      title="Add New Server"
      visible={showModal}
      onOk={addServer}
      onCancel={onCloseModal}
    >
      <Form
        form={form}
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
          rules={[required('Please enter server port!')]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

WorkspaceListAddModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
