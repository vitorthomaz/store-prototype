import React from 'react';
import proptypes from 'prop-types';

import { Container, Item } from './styles';

const Navigataion = ({ data }) => {
  return (
    <nav>
      <Container>
        {data.map(({ text, description, action }) => (
          <Item key={description} onClick={action}>
            {text}
          </Item>
        ))}
      </Container>
    </nav>
  );
};

Navigataion.propTypes = {
  data: proptypes.arrayOf(
    proptypes.shape({
      description: proptypes.string,
      text: proptypes.string,
      action: proptypes.func
    })
  ).isRequired
};

export default Navigataion;
