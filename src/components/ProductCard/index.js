import React from 'react';
import proptypes from 'prop-types';

import { Card, Image, Title, Price, CartZone } from './styles';

import { GreenZone, RedZone } from './components';

const ProductCard = ({ id, price, title, url }) => {
  return (
    <Card>
      <Image src={url} />
      <Title>{title}</Title>
      <Price>R$ {price.toFixed(2)}</Price>
      <CartZone>
        <RedZone
          onClick={() => {
            console.log('red');
          }}
        />
        <GreenZone
          onClick={() => {
            console.log('green');
          }}
        />
      </CartZone>
    </Card>
  );
};

ProductCard.propTypes = {
  id: proptypes.string.isRequired,
  price: proptypes.number.isRequired,
  title: proptypes.string.isRequired,
  url: proptypes.string.isRequired
};

export default ProductCard;
