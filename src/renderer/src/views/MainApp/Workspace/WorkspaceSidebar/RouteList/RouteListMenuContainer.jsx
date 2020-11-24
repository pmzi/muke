import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import RouteListMenu from './RouteListMenu';

function transformRoutes(routes, onClick) {
  return routes.map((route) => {
    let newRoute = {};
    if (route.children) {
      newRoute.children = transformRoutes(route.children, onClick);
    }

    newRoute = {
      ...route,
      ...newRoute,
      onClick,
    };

    return newRoute;
  });
}

export default function RouteListMenuContainer({ goToRoute, items, onItemsChanged }) {
  const [internalItems, setInternalItems] = useState(items);

  useEffect(() => {
    const transformedRoutes = transformRoutes(items, goToRoute);
    setInternalItems(transformedRoutes);
  }, [items]);

  function handleItemsChanged(changedDescription, newItems) {
    setInternalItems(newItems);

    onItemsChanged(changedDescription);
  }

  return (
    <RouteListMenu items={internalItems} onItemsChanged={handleItemsChanged} />
  );
}

RouteListMenuContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  goToRoute: PropTypes.func.isRequired,
  onItemsChanged: PropTypes.func.isRequired,
};
