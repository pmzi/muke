import React from 'react';
import { Descriptions } from 'antd';
import PropTypes from 'prop-types';

export default function KeyValueItems({ items }) {
  const itemsToRender = items.map(({ key, value }) => (
    <Descriptions.Item key={key} label={key}>
      { value }
    </Descriptions.Item>
  ));
  return (
    <Descriptions column={1} layout="horizontal">
      { itemsToRender }
    </Descriptions>
  );
}

KeyValueItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};
