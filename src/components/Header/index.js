import React from 'react';
import { useHistory } from 'react-router-dom';

import { Navigation, Logo, Cart } from './components';

import { Container } from './styles';

import path from '../../constants/paths';

const Header = () => {
  const history = useHistory();
  const buttons = [
    {
      description: 'Goes to Home Page',
      text: 'Início',
      action: () => history.push(path.HOME)
    },
    {
      description: 'Goes to About Page',
      icon: Cart,
      action: () => history.push(path.ABOUT)
    }
  ];

  return (
    <Container>
      <Logo />
      <Navigation data={buttons} />
    </Container>
  );
};

export default Header;
