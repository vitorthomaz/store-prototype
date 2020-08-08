import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

function Products() {
  const pocId = useSelector(state => state);
  console.log(pocId);
  return <Container>Products Page</Container>;
}

export default Products;
