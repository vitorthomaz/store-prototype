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
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${rotation} 0.7s;
  animation-iteration-count: infinite;
`;
