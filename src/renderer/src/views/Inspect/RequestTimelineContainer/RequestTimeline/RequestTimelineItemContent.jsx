import React from 'react';
import PropTypes from 'prop-types';

import RequestTag from '@/common/components/RequestTag';

export default function RequestTimelineItemContent({
  method, path,
}) {
  return (
    <>
      <RequestTag method={method} />
      -
      {' '}
      {path}
    </>
  );
}

RequestTimelineItemContent.propTypes = {
  method: PropTypes.oneOf(['get', 'post', 'put', 'patch', 'delete']).isRequired,
  path: PropTypes.string.isRequired,
};
