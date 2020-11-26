import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';

import createController from '@common/utilities/createController';
import WorkspaceAddPathModalForm from './WorkspaceAddPathModalFormContainer';

export default function WorkspaceAddPathModal({ show, onVisibilityChange }) {
  const [submitController] = useState(createController('submit'));
  const [loading, setLoading] = useState(false);

  // TODO: add resetController and cancelController

  function handleCancel() {
    setLoading(false);
    onVisibilityChange(false);
  }

  function handleOk() {
    submitController.submit();
  }

  function handleOnFinish() {
    onVisibilityChange(false);
  }

  return (
    <Modal
      visible={show}
      onCancel={handleCancel}
      title="Add Route/Group"
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Save
        </Button>,
      ]}
    >
      <WorkspaceAddPathModalForm
        submitController={submitController}
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
