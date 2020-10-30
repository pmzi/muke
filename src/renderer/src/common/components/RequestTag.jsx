import React from 'react';
import PropTypes from 'prop-types';

import { Tag } from 'antd';

const requestTypeProperties = {
  GET: 'blue',
  DELETE: 'red',
  POST: 'green',
  PUT: 'magenta',
  PATCH: 'purple',
};

export default function RequestTag({ method }) {
  const methodText = method.toUpperCase();
  const methodColor = requestTypeProperties[methodText];

  return (
    <Tag color={methodColor}>
      {methodText}
    </Tag>
  );
}

RequestTag.propTypes = {
  method: PropTypes.oneOf(['get', 'post', 'put', 'patch', 'delete']).isRequired,
};
