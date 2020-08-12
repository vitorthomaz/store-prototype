import React from 'react';
import proptypes from 'prop-types';
import GreenZone from './primitive';

import { Add } from '../../../../assets/icons';
import { theme } from '../../../../global';

const ClickableZone = ({ testid, onClick }) => (
  <GreenZone background={theme.cards.green} onClick={onClick}>
    <div data-testid={testid}>
      <Add />
    </div>
  </GreenZone>
);

ClickableZone.propTypes = {
  testid: proptypes.string,
  onClick: proptypes.func.isRequired
};

export default ClickableZone;
