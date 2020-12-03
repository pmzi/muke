import React from 'react';

const ResponseContext = React.createContext({
  language: '',
  response: '',
  changeLanguage: () => {},
  changeResponse: () => {},
});

export default ResponseContext;
