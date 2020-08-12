import React from 'react';
import proptypes from 'prop-types';

import { Container } from './styles';

const Table = ({ data }) => {
  return (
    <Container data-testid="shopping-cart-products">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço unidade</th>
          <th>Quantidade</th>
          <th>Preço total</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ title, price, amount, total }, idx) => (
          <tr key={idx}>
            <td>{title}</td>
            <td>R$ {price}</td>
            <td>{amount}</td>
            <td>R$ {total}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

Table.propTypes = {
  data: proptypes.arrayOf(
    proptypes.shape({
      title: proptypes.string,
      price: proptypes.number,
      amount: proptypes.number,
      total: proptypes.string
    })
  )
};

export default Table;
