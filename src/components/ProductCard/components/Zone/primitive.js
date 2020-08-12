import React from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';

export const Clickable = ({ background, onClick, children }) => (
  <Zone background={background} onClick={onClick}>
    {children}
  </Zone>
);

Clickable.propTypes = {
  background: proptypes.string,
  onClick: proptypes.func.isRequired,
  children: proptypes.element.isRequired
};

Clickable.defaultProps = {
  background: '#fff',
  invert: false
};

export const Zone = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  flex-grow: 1;
  background: ${props => props.background};
`;

export default Clickable;
