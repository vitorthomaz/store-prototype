import React from 'react';
import proptypes from 'prop-types';

import { Container, Item } from './styles';

const Navigation = ({ data }) => {
  return (
    <nav>
      <Container>
        {data.map(({ text, icon: Icon, description, action }) => (
          <Item title={description} key={description} onClick={action}>
            {text}
            {Icon && <Icon />}
          </Item>
        ))}
      </Container>
    </nav>
  );
};

Navigation.propTypes = {
  data: proptypes.arrayOf(
    proptypes.shape({
      description: proptypes.string.isRequired,
      action: proptypes.func.isRequired,
      text: proptypes.string,
      icon: proptypes.func
    })
  ).isRequired
};

export default Navigation;
