/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import 'prismjs';
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';

export default function Prism({ ...props }) {
  return (
    <PrismCode {...props} />
  );
}
