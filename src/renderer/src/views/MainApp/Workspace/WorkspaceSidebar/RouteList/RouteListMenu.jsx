import React from 'react';
import arrayMove from 'array-move';
import cloneDeep from 'lodash.clonedeep';
import PropTypes from 'prop-types';

import SortableMenu from './SortableMenu';

function findParent(parent, clonedItems) {
  for (let i = 0; i < clonedItems.length; i += 1) {
    const item = clonedItems[i];
    if (item.id === parent) return item;
    if (item.children && item.children.length) {
      const foundParent = findParent(parent, item.children);
      if (foundParent) return foundParent;
    }
  }
  return null;
}

function changePosition({
  oldIndex, newIndex, parent, items,
}) {
  if (!parent) {
    return arrayMove(items, oldIndex, newIndex);
  }

  const clonedItems = cloneDeep(items);
  const parentObject = findParent(parent, clonedItems);
  parentObject.children = arrayMove(parentObject.children, oldIndex, newIndex);
  return clonedItems;
}

export default function RouteListMenu({ items, onItemsChanged, onMenuClick }) {
  function onSortChange(parent, { oldIndex, newIndex }) {
    const newItems = changePosition({
      oldIndex, newIndex, parent, items,
    });
    onItemsChanged({ parent, oldIndex, newIndex }, newItems);
  }

  return (
    <SortableMenu
      onMenuClick={onMenuClick}
      mode="inline"
      onSortChange={onSortChange}
      items={items}
    />
  );
}

RouteListMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemsChanged: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};
