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
  margin: 0 auto;
  height: 100%;
  max-width: 1024px;

  display: flex;
  justify-content: center;
  align-items: center;
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
  position: absolute;
  opacity: ${props => (props.opacity ? 1 : 0)};
  transition: opacity 0.4s;

  font-size: 0.75rem;
  color: red;
`;
