import React from 'react';
import proptypes from 'prop-types';

import { Container, Rotation } from './styles';

const Spinner = ({ spinSize, spinColor }) => {
  return (
    <Container>
      <Rotation spinSize={spinSize / 6} spinColor={spinColor} />
    </Container>
  );
};

Spinner.propTypes = {
  spinColor: proptypes.string.isRequired,
  spinSize: proptypes.number
};

Spinner.defaultProps = {
  spinSize: 48
};

export default Spinner;
