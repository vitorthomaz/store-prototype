import styled, { keyframes } from 'styled-components';
import { media } from 'global';

const appear_disapear = keyframes`
  from {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${media.mobile.width}) {
    span {
      font-size: 1em;
    }
  }

  @media screen and (min-width: ${media.mobile.width}) and (max-width: ${media
      .tablet.width}) {
    span {
      font-size: 1.2em;
    }
  }
`;

export const SearchBar = styled.div`
  width: 450px;

  @media screen and (max-width: ${media.mobile.width}) {
    width: 250px;
  }

  @media screen and (min-width: ${media.mobile.width}) and (max-width: ${media
      .tablet.width}) {
    width: 350px;
  }
`;

export const ProblemIndicator = styled.span`
  animation: ${appear_disapear} 1s;

  font-size: 2em;

  @media screen and (max-width: ${media.mobile.width}) {
    font-size: 1em;
  }

  @media screen and (min-width: ${media.mobile.width}) and (max-width: ${media
      .tablet.width}) {
    font-size: 1.2em;
  }
`;
