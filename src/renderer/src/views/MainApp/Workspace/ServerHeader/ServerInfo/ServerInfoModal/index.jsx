import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import { useParams, useHistory } from 'react-router-dom';

import { useDeleteWorkspace } from '@common/hooks/dataHooks';
import notify from '@services/notify';
import { HOME } from '@common/constants/urls';
import ServerInfoModalList from './ServerInfoModalList';

export default function ServerInfoModal({ show = false, onVisibilityChange }) {
  const { workspace } = useParams();
  const history = useHistory();
  const [deleteWorkspace, { isLoading: isDeleting }] = useDeleteWorkspace(workspace);

  function onCancel() {
    onVisibilityChange(false);
  }

  function onOk() {
    onVisibilityChange(false);
  }

  function onDelete() {
    deleteWorkspace().then(() => {
      onVisibilityChange(false);
      history.push(HOME);
      notify.success('Workspace has been deleted!');
    }).catch(({ message }) => {
      notify.error(message);
    });
  }

  return (
    <Modal
      title="Server Info"
      visible={show}
      onCancel={onCancel}
      onOk={onOk}
      footer={(
        <>
          <Button loading={isDeleting} key="delete" type="danger" onClick={onDelete}>
            Delete
          </Button>
          <Button key="ok" type="primary" onClick={onOk}>
            Got it
          </Button>
        </>
      )}
    >
      <ServerInfoModalList />
    </Modal>
  );
}

ServerInfoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
};
