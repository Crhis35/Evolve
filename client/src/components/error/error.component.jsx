import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error.styles';

const ErrorComponent = () => {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
      <ErrorImageText>Sorry This Page is Lost in Space</ErrorImageText>
    </ErrorImageOverlay>
  );
};

export default ErrorComponent;
