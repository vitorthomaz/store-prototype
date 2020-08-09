import React from 'react';
import { useHistory } from 'react-router-dom';

import { Navigation, Logo } from './components';

import { Container, Sized } from './styles';

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
      text: 'Sobre',
      action: () => history.push(path.ABOUT)
    }
  ];

  return (
    <Container>
      <Sized>
        <Logo />
        <Navigation data={buttons} />
      </Sized>
    </Container>
  );
};

export default Header;
