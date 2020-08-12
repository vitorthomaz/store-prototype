import React from 'react';
import { useHistory } from 'react-router-dom';

import { Navigation, Logo, Cart } from './components';
import { Home } from '../../assets/icons';

import { Container } from './styles';

import path from '../../constants/paths';

const Header = () => {
  const history = useHistory();
  const buttons = [
    {
      description: 'Início',
      icon: Home,
      action: () => history.push(path.HOME),
      key: 'home'
    },
    {
      description: 'Carrinho',
      icon: Cart,
      action: () => history.push(path.CHECKOUT),
      key: 'cart'
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
