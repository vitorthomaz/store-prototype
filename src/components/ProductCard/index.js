import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import proptypes from 'prop-types';

import { Card, Image, Infos, Title, Price, CartZone, Quantity } from './styles';

import { GreenZone, RedZone } from './components';

import { addProduct, removeProduct } from '../../store/actions/shopping';

const ProductCard = ({ id, price, title, url }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const remove = useCallback(
    id => {
      dispatch(removeProduct(id));
      setQuantity(prev => (prev > 0 ? prev - 1 : 0));
    },
    [dispatch]
  );

  const add = useCallback(
    (id, title, price) => {
      dispatch(addProduct(id, title, price));
      setQuantity(prev => prev + 1);
    },
    [dispatch]
  );

  return (
    <Card>
      <Image src={url} />
      <Infos>
        <Title>{title}</Title>
        <Price>R$ {price.toFixed(2)}</Price>
        <CartZone>
          <RedZone
            onClick={() => {
              remove(id);
            }}
          />
          <Quantity>{quantity}</Quantity>
          <GreenZone
            onClick={() => {
              add(id, title, price);
            }}
          />
        </CartZone>
      </Infos>
    </Card>
  );
};

ProductCard.propTypes = {
  id: proptypes.string.isRequired,
  price: proptypes.number.isRequired,
  title: proptypes.string.isRequired,
  url: proptypes.string.isRequired,
  quantity: proptypes.number
};

export default ProductCard;
