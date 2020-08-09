import React from 'react';

import { Github, Linkedin } from '../../assets/icons';
import { ExternalLink, Layout } from '../../components';

import { Container, Author } from './styles';

const About = () => {
  const github = {
    icon: Github,
    text: 'vitorthomaz',
    site: 'https://github.com/vitorthomaz'
  };

  const linkedin = {
    icon: Linkedin,
    text: 'vitorthomaz155',
    site: 'https://www.linkedin.com/in/vitorthomaz155/'
  };

  return (
    <Layout>
      <Container>
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
    </Layout>
  );
};

export default About;
