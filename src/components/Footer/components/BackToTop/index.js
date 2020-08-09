import React from 'react';

import { ArrowUp } from '../../../../assets/icons';

import { Container, Text } from './styles';

const size = 40;

const BackToTop = () => (
  <Container href="#top">
    <ArrowUp width={size} height={size} />
    <Text>Topo</Text>
  </Container>
);

export default BackToTop;
