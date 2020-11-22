/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import bazaarLogo from '@/assets/images/bazaar.png';

export default function WorkspaceListItem({ image, onClick, isActive }) {
  const activeClasses = isActive ? 'border-blue-300' : '';
  return (
    <div role="button" onClick={onClick} className={`transform hover:scale-110 duration-500 cursor-pointer rounded-full border-4 border-solid h-20 w-20 flex items-center justify-center mb-4 ${activeClasses}`}>
      <img alt="server" className="w-12" src={image || bazaarLogo} />
    </div>
  );
}

WorkspaceListItem.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

WorkspaceListItem.defaultProps = {
  image: null,
  isActive: false,
};
