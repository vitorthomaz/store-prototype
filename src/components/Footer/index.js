import React from 'react';

import { BottomNav } from './components';
import { ExternalLink } from '../../components';

import { Container, Author } from './styles';

import { title, partners, linkedin, github } from './data';

const Footer = () => {
  return (
    <Container>
      <BottomNav title={title} items={partners} />
      <Author>
        <ExternalLink
          icon={github.icon}
          text={github.text}
          site={github.site}
        />
        <ExternalLink
          icon={linkedin.icon}
          text={linkedin.text}
          site={linkedin.site}
        />
      </Author>
    </Container>
  );
};

export default Footer;
