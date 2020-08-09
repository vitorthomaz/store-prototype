import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, SearchBar, ProblemIndicator } from './styles';

import { Layout, AddressInput, LoadingIndicator } from '../../components';

import { convertToGeo } from '../../services/geocoding';
import { getPocId } from '../../services/poc';

import paths from '../../constants/paths';
import { setPoc } from '../../store/actions/poc';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const resetInput = () => {
    setError('');
  };

  const handleOnClick = async () => {
    if (text.length === 0) {
      setError('Insert something on input');
      return;
    }

    setIsLoading(true);
    const geo = await convertToGeo(text);
    if (geo.error) {
      setIsLoading(false);
      setError(geo.error);
      setText('');
      return;
    }
    if (geo.empty) {
      setIsLoading(false);
      setError(geo.empty);
      setText('');
      return;
    }
    const { lat, lng } = geo.geometry;

    const graphql = await getPocId(lat, lng);
    if (graphql.error) {
      setIsLoading(false);
      setError(graphql.error);
      setText('');
      return;
    }
    if (graphql.empty) {
      setIsLoading(false);
      setError(graphql.empty);
      setText('');
      return;
    }

    dispatch(setPoc(graphql.id));
    setIsLoading(false);
    setText('');
    history.push(paths.PRODUCTS);
  };

  return (
    <Layout>
      <Container>
        {isLoading && <LoadingIndicator />}
        {!isLoading && (
          <SearchBar>
            {error.length > 0 && <ProblemIndicator>{error}</ProblemIndicator>}
            <AddressInput
              setText={setText}
              resetInput={resetInput}
              onClick={handleOnClick}
            />
          </SearchBar>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
