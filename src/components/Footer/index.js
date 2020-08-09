import React from 'react';

import { BackToTop, BottomNav } from './components';

import { Container, Sized } from './styles';

const title = 'RECURSOS';

const partners = [
  {
    text: 'React',
    site: 'https://pt-br.reactjs.org/'
  },
  {
    text: 'Javascript',
    site: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript'
  },
  {
    text: 'HTML',
    site: 'https://www.w3schools.com/html/'
  },
  {
    text: 'CSS',
    site: 'https://www.w3schools.com/css/'
  },
  {
    text: 'Webpack',
    site: 'https://webpack.js.org/'
  },
  {
    text: 'Babel',
    site: 'https://babeljs.io/'
  }
];

const Footer = () => {
  return (
    <Container>
      <BottomNav title={title} items={partners} />
      <BackToTop />
    </Container>
  );
};

export default Footer;
