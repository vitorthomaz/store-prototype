import React from 'react';

import Layout from '../../Layout';

import { Container } from './styles';

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <h1 data-testid="not-found">Esta página não existe :(</h1>
      </Container>
    </Layout>
  );
};

export default NotFound;
