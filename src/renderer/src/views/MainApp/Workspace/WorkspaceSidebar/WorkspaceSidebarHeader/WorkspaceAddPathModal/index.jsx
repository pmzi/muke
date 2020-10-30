import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

import { useForm } from 'antd/lib/form/Form';
import WorkspaceAddPathModalForm from './WorkspaceAddPathModalForm';

export default function WorkspaceAddPathModal({ show, onVisibilityChange }) {
  const [form] = useForm();

  function handleCancel() {
    form.resetFields();
    onVisibilityChange(false);
  }
  function handleOk() {
    // async action
    form.submit();
    onVisibilityChange(true);
  }

  function handleOnFinish() {
    // console.log(fields);
    onVisibilityChange(false);
  }

  return (
    <Modal visible={show} onCancel={handleCancel} onOk={handleOk} title="Add Route/Group">
      <WorkspaceAddPathModalForm form={form} onFinish={handleOnFinish} />
    </Modal>
  );
}

WorkspaceAddPathModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
};
