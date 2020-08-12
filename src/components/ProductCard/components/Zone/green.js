import React from 'react';
import proptypes from 'prop-types';
import GreenZone from './primitive';

import { Add } from '../../../../assets/icons';

const ClickableZone = ({ onClick }) => (
  <GreenZone background="#5dc421" onClick={onClick}>
    <Add />
  </GreenZone>
);

ClickableZone.propTypes = {
  onClick: proptypes.func.isRequired
};

export default ClickableZone;
