import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, Input, Form } from './styles';

import { Layout } from '../../components';

import { Search } from '../../assets/icons';
import { convertToGeo } from '../../services/geocoding';
import { getPocId } from '../../services/poc';

import paths from '../../constants/paths';
import { setPoc } from '../../store/actions/poc';

const size = 28;

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const searchAddress = async () => {
    if (text.length === 0) {
      console.log('Insert something on input');
      return;
    }

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

    dispatch(setPoc(graphql.id));

    history.push(paths.PRODUCTS);
  };

  return (
    <Layout>
      <Container>
        <Form>
          <Input
            placeholder={'Digite aqui seu endereço'}
            onChange={event => setText(event.target.value)}
          />
          <Search width={size} height={size} onClick={searchAddress} />
        </Form>
      </Container>
    </Layout>
  );
};

export default Home;
