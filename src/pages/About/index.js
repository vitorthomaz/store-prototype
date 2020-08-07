import React from 'react';

import { Github, Linkedin } from '../../assets';
import { ExternalLink } from '../../components';

import { Container, Author } from './styles';

const About = () => {
  const github = {
    icon: Github,
    user: 'vitorthomaz',
    site: 'https://github.com/vitorthomaz'
  };

  const linkedin = {
    icon: Linkedin,
    user: 'vitorthomaz155',
    site: 'https://www.linkedin.com/in/vitorthomaz155/'
  };

  return (
    <Container>
      <Author>
        <ExternalLink
          icon={github.icon}
          user={github.user}
          site={github.site}
        />
        <ExternalLink
          icon={linkedin.icon}
          user={linkedin.user}
          site={linkedin.site}
        />
      </Author>
    </Container>
  );
};

export default About;
