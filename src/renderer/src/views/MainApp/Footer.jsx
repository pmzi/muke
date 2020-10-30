import React from 'react';

import ExternalLink from '@common/components/ExternalLink';

export default function Footer() {
  return (
    <div>
      Made with
      {' '}
      <span aria-label="love" role="img">♥️</span>
      {' '}
      by
      {' '}
      <ExternalLink href="https://github.com/pmzi" rel="noopener noreferrer" target="_blank">pmzi</ExternalLink>
    </div>
  );
}
