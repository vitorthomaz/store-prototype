import React from 'react';

import { ArrowUp } from '../../assets';

import { Container, Text } from './styles';

const size = 40;

const BackToTop = () => {
  return (
    <Container href="#top">
      <ArrowUp width={size} height={size} />
      <Text>Topo</Text>
    </Container>
  );
};

export default BackToTop;
