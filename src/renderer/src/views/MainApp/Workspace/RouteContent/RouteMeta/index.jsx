import React, { useState } from 'react';

import RouteEditModal from './RouteEditModal';
import RouteMetaDescriptions from './RouteMetaDescriptions';

export default function RouteMeta() {
  const [shouldShowEditModal, setShouldShowEditModal] = useState(false);

  function showEditModal() {
    setShouldShowEditModal(true);
  }
  function hideEditModal() {
    setShouldShowEditModal(false);
  }

  return (
    <>
      <RouteMetaDescriptions onEditButtonClicked={showEditModal} />

      <RouteEditModal onHide={hideEditModal} show={shouldShowEditModal} />
    </>
  );
}
