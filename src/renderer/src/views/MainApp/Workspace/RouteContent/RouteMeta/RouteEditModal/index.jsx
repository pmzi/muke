import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

import createController from '@common/utilities/createController';
import RouteEditModalFormContainer from './RouteEditModalFormContainer';

export default function RouteEditModal({ show, onHide }) {
  const { current: submitController } = useRef(createController('submit'));
  const { current: resetController } = useRef(createController('reset'));
  const [loading, setLoading] = useState(false);

  function hide() {
    onHide();
  }

  function submitForm() {
    submitController.submit();
  }

  function resetAndHide() {
    resetController.reset();

    hide();
  }

  return (
    <Modal
      visible={show}
      onCancel={resetAndHide}
      title="Edit Route"
      footer={[
        <Button disabled={loading} key="back" onClick={resetAndHide}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" disabled={loading} loading={loading} onClick={submitForm}>
          Save
        </Button>,
      ]}
    >
      <RouteEditModalFormContainer
        submitController={submitController}
        resetController={resetController}
        onFinish={hide}
        onLoadingChange={setLoading}
      />
    </Modal>
  );
}

RouteEditModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
