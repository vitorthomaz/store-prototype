import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Shopping } from '../../../../assets/icons';

import { Container, Counter } from './styles';

const Cart = () => {
  const shopping = useSelector(state => state.shopping);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(new Set(shopping.map(product => product.id)).size);

    return () => setCount(0);
  }, [shopping]);

  return (
    <Container>
      <Counter>{count}</Counter>
      <Shopping />
    </Container>
  );
};

export default Cart;
