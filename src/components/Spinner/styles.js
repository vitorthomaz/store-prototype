import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Rotation = styled.div`
  padding: ${props => props.spinSize}px;
  border: ${props => props.spinSize}px solid ${props => props.spinColor};
  border-top: ${props => props.spinSize}px solid transparent;
  border-radius: 100%;

  animation: ${rotation} 0.5s;
  animation-iteration-count: infinite;
`;
