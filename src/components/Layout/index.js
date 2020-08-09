import React from 'react';
import proptypes from 'prop-types';

import { Container, Section } from './styles';

import { Header, Footer } from '../../components';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Section>{children}</Section>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: proptypes.object
};

export default Layout;
