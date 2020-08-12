import React from 'react';

import { LoadingIndicator, ProductCard as Card } from '../../components';

import Layout from '../../Layout';

import useProducts from '../../hooks/useProducts';

import { Container, Title, CardGrid } from './styles';

const Products = () => {
  const [products, isLoading, error] = useProducts();

  return (
    <Layout>
      <Container>
        <Title>Lista de Produtos</Title>
        {isLoading && <LoadingIndicator />}
        {error && <span>Nenhum produto encontrado</span>}

        {!isLoading && !error && (
          <CardGrid>
            {products.map(({ id, price, title, url }) => (
              <Card key={id} id={id} price={price} title={title} url={url} />
            ))}
          </CardGrid>
        )}
      </Container>
    </Layout>
  );
};

export default Products;
