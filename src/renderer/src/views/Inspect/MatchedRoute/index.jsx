import React from 'react';
import PropTypes from 'prop-types';

import MatchedRouteInfo from './MatchedRouteInfo';
import MatchedRouteDetails from './MatchedRouteDetails';

export default function RequestDetails({ className }) {
  return (
    <div className={`${className} flex flex-col`}>
      <div className="p-6">
        <MatchedRouteInfo />
      </div>
      <div className="flex-1 min-h-0">
        <MatchedRouteDetails />
      </div>
    </div>
  );
}

RequestDetails.propTypes = {
  className: PropTypes.string,
};

RequestDetails.defaultProps = {
  className: '',
};
