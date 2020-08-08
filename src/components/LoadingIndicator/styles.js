import styled, { keyframes } from 'styled-components';

const pixel = value => `${value}px`;

const dotSmall = 7;
const dotBig = 13;
const dotMargin = 5;

const cycle = (start, end) => keyframes`
  from {
    padding: ${pixel(start)};
  }

  50% {
    padding: ${pixel(end)};
  }

  to {
    padding: ${pixel(start)};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: ${pixel(4 * dotBig + 8 * dotMargin)};
  height: ${pixel(2 * dotBig + 4 * dotMargin)};

  div:nth-child(2) {
    animation: ${cycle(dotSmall, dotBig)} 1s;
    animation-iteration-count: infinite;
  }
`;

export const Dot = styled.div`
  margin: ${pixel(dotMargin)};

  animation: ${cycle(dotBig, dotSmall)} 1s;
  animation-iteration-count: infinite;

  background: ${props => props.theme.colors.yellow};
  border-radius: 100%;
`;
