import React from 'react';
import proptypes from 'prop-types';
import RedZone from './primitive';

import { Remove } from '../../../../assets/icons';

const ClickableZone = ({ testid, onClick }) => (
  <RedZone background="#ca4d3f" onClick={onClick}>
    <div data-testid={testid}>
      <Remove />
    </div>
  </RedZone>
);

ClickableZone.propTypes = {
  testid: proptypes.string,
  onClick: proptypes.func.isRequired
};

export default ClickableZone;
