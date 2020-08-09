import styled from 'styled-components';
import { media } from 'global';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 1.5em;

  @media screen and (max-width: ${media.mobile.width}) {
    font-size: 1em;
  }

  @media screen and (min-width: ${media.mobile.width}) and (max-width: ${media
      .tablet.width}) {
    font-size: 1.2em;
  }
`;
