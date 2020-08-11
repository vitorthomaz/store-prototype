import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import proptypes from 'prop-types';

import {
  Form,
  SearchBar,
  Input,
  Loader,
  Button,
  ProblemIndicator
} from './styles';

import { Search } from '../../assets/icons';
import { Spinner } from '../../components';
import { setPoc } from '../../store/actions/poc';
import { INPUT_EMPTY } from '../../constants/components';

import { convertToGeo } from '../../services/geocoding';
import { getPocId } from '../../services/poc';

const AddressInput = ({ changePage }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async event => {
    event.preventDefault();
    setError('');

    if (text.length === 0) {
      setError(INPUT_EMPTY);
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

    const { lat, lng } = geo.geometry;
    const graphql = await getPocId(lat, lng);
    if (graphql.error) {
      setIsLoading(false);
      setError(graphql.error);
      setText('');
      return;
    }

    dispatch(setPoc(graphql.id));
    setIsLoading(false);
    setText('');
    changePage();
  };

  return (
    <SearchBar>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder={'Digite aqui seu endereço'}
          onChange={event => setText(event.target.value)}
          value={text}
        />
        <Loader>
          {!isLoading ? (
            <Button type="submit">
              <Search />
            </Button>
          ) : (
            <Spinner spinColor={'#000'} spinSize={48} />
          )}
        </Loader>
      </Form>
      <ProblemIndicator opacity={error}>{error}</ProblemIndicator>
    </SearchBar>
  );
};

AddressInput.propTypes = {
  changePage: proptypes.func.isRequired
};

export default AddressInput;
