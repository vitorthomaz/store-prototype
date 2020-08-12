import React from 'react';
import proptypes from 'prop-types';
import GreenZone from './primitive';

import { Add } from '../../../../assets/icons';

const ClickableZone = ({ testid, onClick }) => (
  <GreenZone background="#5dc421" onClick={onClick}>
    <div data-testid={testid}>
      <Add />
    </div>
  </GreenZone>
);

ClickableZone.propTypes = {
  id: proptypes.string,
  onClick: proptypes.func.isRequired
};

export default ClickableZone;
