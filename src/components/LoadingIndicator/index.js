import React from 'react';

import { Container, Dot } from './styles';

const LoadingIndicator = () => {
  return (
    <Container data-testid="loading">
      {[1, 2, 3].map((element, idx) => (
        <Dot key={idx} />
      ))}
    </Container>
  );
};

export default LoadingIndicator;
