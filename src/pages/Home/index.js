import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import { Layout, AddressInput, LoadingIndicator } from '../../components';

import paths from '../../constants/paths';

const Home = () => {
  const history = useHistory();

  const goToProducts = () => {
    history.push(paths.PRODUCTS);
  };

  return (
    <Layout>
      <Container>
        <AddressInput changePage={goToProducts} />
      </Container>
    </Layout>
  );
};

export default Home;
