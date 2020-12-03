import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import RouteListMenu from './RouteListMenu';

export default function RouteListMenuContainer({ goToRoute, items, onItemsChanged }) {
  const [internalItems, setInternalItems] = useState(items);

  useEffect(() => {
    setInternalItems(items);
  }, [items]);

  const onMenuClick = useCallback(({ key: id }) => {
    goToRoute(id);
  }, [goToRoute]);

  function handleItemsChanged(changedDescription, newItems) {
    setInternalItems(newItems);

    onItemsChanged(changedDescription);
  }

  return (
    <RouteListMenu
      onMenuClick={onMenuClick}
      items={internalItems}
      onItemsChanged={handleItemsChanged}
    />
  );
}

RouteListMenuContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  goToRoute: PropTypes.func.isRequired,
  onItemsChanged: PropTypes.func.isRequired,
};
