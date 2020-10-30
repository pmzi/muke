import React, { useState } from 'react';
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

export default function WorkspaceListMenu({ goToRoute }) {
  const [items, setItems] = useState([{
    id: 1,
    title: 'salam1',
    children: [
      {
        id: 11,
        text: 'sub11',
      },
      {
        onClick: goToRoute,
        id: 22,
        text: 'sub22',
      },
    ],
  },
  {
    onClick: goToRoute,
    id: 2,
    text: 'salam2',
  }, {
    id: 3,
    text: 'salam3',
  }]);

  function onSortChange(parent, { oldIndex, newIndex }) {
    if (!parent) {
      setItems(arrayMove(items, oldIndex, newIndex));
      return;
    }

    const clonedItems = cloneDeep(items);
    const parentObject = findParent(parent, clonedItems);
    parentObject.children = arrayMove(parentObject.children, oldIndex, newIndex);
    setItems(clonedItems);
  }

  return (
    <SortableMenu
      mode="inline"
      onSortChange={onSortChange}
      items={items}
    />
  );
}

WorkspaceListMenu.propTypes = {
  goToRoute: PropTypes.func.isRequired,
};
