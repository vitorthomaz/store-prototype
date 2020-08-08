import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Input, Form } from './styles';

import { Search } from '../../assets';
import { convertToGeo } from '../../services/geocoding';
import { getPocId } from '../../services/poc';

import paths from '../../constants/paths';

const size = 28;

const Home = () => {
  const history = useHistory();
  const [text, setText] = useState('');

  const searchAddress = () => async () => {
    const geo = await convertToGeo(text);

    if (geo.error) {
      console.log(geo.error);
      return;
    }

    if (geo.empty) {
      console.log(geo.empty);
      return;
    }

    const { lat, lng } = geo.geometry;

    const graphql = await getPocId(lat, lng);

    if (graphql.error) {
      console.log(graphql.error);
      return;
    }

    if (graphql.empty) {
      console.log(graphql.empty);
      return;
    }

    console.log(graphql.id);

    history.push(paths.PRODUCTS);
  };

  return (
    <Container>
      <Form>
        <Input
          placeholder={'Digite aqui seu endereço'}
          onChange={event => setText(event.target.value)}
        ></Input>
        <Search width={size} height={size} onClick={searchAddress()} />
      </Form>
    </Container>
  );
};

export default Home;
