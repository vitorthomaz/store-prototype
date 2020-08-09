import React from 'react';
import proptypes from 'prop-types';

import { Container, Text } from './styles';

const ExternalLink = ({ icon: Icon, text, site }) => {
  return (
    <Container href={site} target="_blank">
      {Icon && <Icon />}
      <Text>{text}</Text>
    </Container>
  );
};

ExternalLink.propTypes = {
  text: proptypes.string.isRequired,
  site: proptypes.string.isRequired,
  icon: proptypes.elementType
};

export default ExternalLink;
