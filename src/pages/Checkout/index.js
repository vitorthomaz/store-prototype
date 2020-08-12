import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { LoadingIndicator, Table } from '../../components';
import Layout from '../../Layout';

import { Container, Title } from './styles';

const ShoppingCart = () => {
  const shopping = useSelector(state => state.shopping);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const ids = Array.from(new Set(shopping.map(product => product.id)));

    const tableData = ids.map(id => {
      const productsInCart = shopping.filter(elem => elem.id === id);

      const title = productsInCart[0].title;
      const price = productsInCart[0].price;
      const amount = productsInCart.length;
      const total = (amount * price).toFixed(2);

      return { title, price, amount, total };
    });

    setData(tableData);
    setIsLoading(false);
  }, [shopping]);

  return (
    <Layout>
      <Container>
        <Title>Finalizar pedido</Title>
        {isLoading && <LoadingIndicator />}
        {!isLoading && data.length === 0 && <h3>Seu carrinho está vazio :(</h3>}
        {!isLoading && data.length > 0 && <Table data={data} />}
      </Container>
    </Layout>
  );
};

export default ShoppingCart;
