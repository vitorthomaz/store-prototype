import React from 'react';
import propTypes from 'prop-types';

import { Container } from './styles';

const List = ({ data, styles }) => {
  return (
    <Container styles={styles}>
      {data.map(({ text, Component, description, action }, idx) => (
        <Component
          key={description || idx}
          onClick={(action && action()) || undefined}
        >
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
