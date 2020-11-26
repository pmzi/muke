import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';

import createController from '@common/utilities/createController';
import WorkspaceAddPathModalForm from './WorkspaceAddPathModalFormContainer';

export default function WorkspaceAddPathModal({ show, onVisibilityChange }) {
  const [submitController] = useState(createController('submit'));
  const [resetController] = useState(createController('reset'));
  const [loading, setLoading] = useState(false);

  function handleCancel() {
    if (loading) return;

    resetController.reset();
    setLoading(false);
    onVisibilityChange(false);
  }

  function handleOk() {
    submitController.submit();
  }

  function handleOnFinish() {
    resetController.reset();
    onVisibilityChange(false);
  }

  return (
    <Modal
      visible={show}
      onCancel={handleCancel}
      title="Add Route/Group"
      footer={[
        <Button disabled={loading} key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" disabled={loading} loading={loading} onClick={handleOk}>
          Save
        </Button>,
      ]}
    >
      <WorkspaceAddPathModalForm
        submitController={submitController}
        resetController={resetController}
        onFinish={handleOnFinish}
        onLoadingChange={setLoading}
      />
    </Modal>
  );
}

WorkspaceAddPathModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
};
