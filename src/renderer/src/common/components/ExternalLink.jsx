import React from 'react';
import openExternalLink from '@/common/utilities/openExternalLink';

export default function OpenExternal(props) {
  // eslint-disable-next-line react/prop-types
  const { href } = props;

  function openLink() {
    if (href) openExternalLink(href);
  }

  return (
    // eslint-disable-next-line
    <a {...props} onClick={openLink} />
  );
}
