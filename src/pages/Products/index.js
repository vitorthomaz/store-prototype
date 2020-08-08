import React from 'react';

import { LoadingIndicator, ProductCard as Card } from '../../components';

import useProducts from '../../hooks/useProducts';

import { Container } from './styles';

const Products = () => {
  const [products, isLoading, error] = useProducts();

  return (
    <Container>
      {isLoading && <LoadingIndicator />}
      {error && <span>Nenhum produto encontrado</span>}

      {!isLoading &&
        !error &&
        products.map(({ id, price, title, url }) => (
          <Card key={id} id={id} price={price} title={title} url={url} />
        ))}
    </Container>
  );
};

export default Products;
