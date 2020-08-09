import React from 'react';
import proptypes from 'prop-types';

import { Container, Item } from './styles';

import { ExternalLink } from '../../../../components';

const List = ({ items }) => (
  <Container>
    {items.map(({ text, site }, idx) => (
      <Item key={idx}>
        <ExternalLink site={site} text={text} />
      </Item>
    ))}
  </Container>
);

List.propTypes = {
  items: proptypes.arrayOf(
    proptypes.shape({
      text: proptypes.string,
      site: proptypes.string
    })
  )
};

export default List;
