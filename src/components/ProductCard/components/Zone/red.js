import React from 'react';
import proptypes from 'prop-types';
import RedZone from './primitive';

import { Remove } from '../../../../assets/icons';

const ClickableZone = ({ onClick }) => (
  <RedZone background="#ca4d3f" onClick={onClick}>
    <Remove />
  </RedZone>
);

ClickableZone.propTypes = {
  onClick: proptypes.func.isRequired
};

export default ClickableZone;
