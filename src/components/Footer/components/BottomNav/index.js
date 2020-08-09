import React from 'react';
import proptypes from 'prop-types';

import { Container, Title, List, Item } from './styles';

import { ExternalLink } from '../../../../components';

const BottomNav = ({ title, items }) => (
  <Container>
    <Title>{title}</Title>
    <List>
      {items.map(({ text, site }, idx) => (
        <Item key={idx}>
          <ExternalLink site={site} text={text} />
        </Item>
      ))}
    </List>
  </Container>
);

BottomNav.propTypes = {
  title: proptypes.string,
  items: proptypes.arrayOf(
    proptypes.shape({
      text: proptypes.string,
      site: proptypes.string
    })
  )
};

export default BottomNav;
