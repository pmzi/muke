import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'antd';

export default function ServerInfoModalList({ data }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.name}
            description={item.value}
          />
        </List.Item>
      )}
    />
  );
}

ServerInfoModalList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};
