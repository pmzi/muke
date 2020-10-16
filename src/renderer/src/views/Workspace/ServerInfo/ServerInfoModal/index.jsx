import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'antd';

import ServerInfoModalList from './ServerInfoModalList';

const data = [
  {
    name: 'Server Name',
    value: 'Bazaar',
  },
  {
    name: 'Server Address',
    value: 'localhost',
  },
  {
    name: 'Port',
    value: '80',
  },
];

export default function ServerInfoModal({ show = false, onVisibilityChange }) {
  function onCancel() {
    onVisibilityChange(false);
  }

  function onOk() {
    // some async actions
    onVisibilityChange(false);
  }

  return (
    <Modal
      title="Server Info"
      visible={show}
      onCancel={onCancel}
      onOk={onOk}
      footer={(
        <Button type="primary" onClick={onOk}>
          Got it
        </Button>
      )}
    >
      <ServerInfoModalList data={data} />
    </Modal>
  );
}

ServerInfoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
};
