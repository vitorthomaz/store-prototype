import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Input, Form } from './styles';

import { Search } from '../../assets';
import { convertToGeo } from '../../services/geocoding';
import { getPocId } from '../../services/poc';

import paths from '../../constants/paths';

const size = 28;

function Home() {
  const history = useHistory();
  const [text, setText] = useState('');

  const searchAddress = () => async () => {
    if (text.length < 4) {
      console.log('please type a bigger address');
      return;
    }

    const {
      geometry: { lat, lng },
      error: geoError,
      empty: geoEmpty
    } = await convertToGeo(text);

    if (geoError) {
      console.log(geoError);
      return;
    }

    if (geoEmpty) {
      console.log(geoEmpty);
    }

    const { id, error: graphqlError, empty: graphqlEmpty } = await getPocId(
      lat,
      lng
    );

    if (graphqlError) {
      console.log(graphqlError);
      return;
    }

    if (graphqlEmpty) {
      console.log(graphqlEmpty);
      return;
    }

    console.log(id);

    // history.push(paths.PRODUCTS);
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
}

export default Home;
