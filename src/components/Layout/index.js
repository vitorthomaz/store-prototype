import React from 'react';
import proptypes from 'prop-types';

import { Container, Header, Section, Footer } from './styles';

import { Header as HeaderChild, Footer as FooterChild } from '../../components';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <HeaderChild />
      </Header>
      <Section>{children}</Section>
      <Footer>
        <FooterChild />
      </Footer>
    </Container>
  );
};

Layout.propTypes = {
  children: proptypes.object
};

export default Layout;
