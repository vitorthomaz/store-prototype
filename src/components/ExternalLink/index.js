import React from 'react';
import proptypes from 'prop-types';

import { Container, Text } from './styles';

const ExternalLink = ({ icon: Icon, user, site }) => {
  return (
    <Container href={site} target="_blank">
      {Icon && <Icon />}
      <Text>{user}</Text>
    </Container>
  );
};

ExternalLink.propTypes = {
  user: proptypes.string.isRequired,
  site: proptypes.string.isRequired,
  icon: proptypes.elementType
};

export default ExternalLink;
