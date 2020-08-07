import React from 'react';

import { Container, Text } from './styles';

import { Icon } from '../../assets';
const size = '60';

const Logo = () => {
  return (
    <Container>
      <Icon width={size} height={size} />
      <Text>A Loja Digital</Text>
    </Container>
  );
};

export default Logo;
