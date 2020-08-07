import React from 'react';
import propTypes from 'prop-types';

import { Container } from './styles';

const List = ({ data, styles }) => {
  return (
    <Container styles={styles}>
      {data.map(({ description, text, Component, action }) => (
        <Component key={description} onClick={action()}>
          {text}
        </Component>
      ))}
    </Container>
  );
};

List.propTypes = {
  data: propTypes.array.isRequired,
  styles: propTypes.string
};

export default List;
