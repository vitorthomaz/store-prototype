import React from 'react';

import { BackToTop, List } from '../../components';

import { Container, Column, Title, Element } from './styles';

const LoremIpsun = [
  {
    text: 'Adipiscing elit',
    Component: Element
  },
  {
    text: 'Dolor sit',
    Component: Element
  },
  {
    text: 'Amet consectetur',
    Component: Element
  }
];

const styles = `
display: flex;
flex-direction: column;
align-items: flex-start;
`;

const Footer = () => {
  return (
    <Container>
      {[1, 2].map(() => (
        <Column>
          <Title>Lorem ipsun</Title>
          <List data={LoremIpsun} styles={styles} />
        </Column>
      ))}
      <BackToTop />
    </Container>
  );
};

export default Footer;
