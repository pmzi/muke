import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';

export default SortableHandle(() => <MenuOutlined className="cursor-pointer" />);
