import React from 'react';

import { Container, Text } from './styles';

import { Icon } from '../../../../assets/icons';

const Logo = () => {
  const size = '40';

  return (
    <Container>
      <Icon width={size} height={size} />
      <Text>A Loja Digital</Text>
    </Container>
  );
};

export default Logo;
