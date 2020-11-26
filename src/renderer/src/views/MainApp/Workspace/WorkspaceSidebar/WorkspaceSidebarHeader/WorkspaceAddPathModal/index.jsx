import React, { useState } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { useForm } from 'antd/lib/form/Form';

import createController from '@common/utilities/createController';
import WorkspaceAddPathModalForm from './WorkspaceAddPathModalFormContainer';

export default function WorkspaceAddPathModal({ show, onVisibilityChange }) {
  const [form] = useForm();
  const [submitController] = useState(createController('submit'));

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
      <WorkspaceAddPathModalForm submitController={submitController} onFinish={handleOnFinish} />
    </Modal>
  );
}

WorkspaceAddPathModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
};
