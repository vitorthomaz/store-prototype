import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import proptypes from 'prop-types';

import { Card, Image, Infos, Title, Price, CartZone, Quantity } from './styles';

import { GreenZone, RedZone } from './components';

import { addProduct, removeProduct } from '../../store/actions/shopping';

const ProductCard = ({ id, price, title, url }) => {
  const shopping = useSelector(state => state.shopping);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(shopping.filter(elem => elem.id === id).length);
  }, [shopping, id]);

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
    <Card data-testid={`card-${id}`}>
      <Image src={url} />
      <Infos>
        <Title>{title}</Title>
        <Price>R$ {price.toFixed(2)}</Price>
        <CartZone>
          <RedZone
            testid={`card-${id}-remove`}
            onClick={() => {
              remove(id);
            }}
          />
          <Quantity data-testid={`card-${id}-counter`}>{quantity}</Quantity>
          <GreenZone
            testid={`card-${id}-add`}
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
  url: proptypes.string.isRequired
};

export default ProductCard;
