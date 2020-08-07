import React from 'react';
import { useHistory } from 'react-router-dom';

import { List as ButtonList, Logo } from '../../components';

import { Container, Link } from './styles';

const styles = 'width: 20%;justify-content: space-around;';

const Header = () => {
  const history = useHistory();
  const buttons = [
    {
      description: 'Goes to Home Page',
      text: 'Início',
      Component: Link,
      action: () => () => history.push('/')
    },
    {
      description: 'Goes to About Page',
      text: 'Sobre',
      Component: Link,
      action: () => () => history.push('/about')
    }
  ];

  return (
    <Container>
      <Logo />
      <ButtonList data={buttons} styles={styles} />
    </Container>
  );
};

export default Header;
