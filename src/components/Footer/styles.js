import styled from 'styled-components';
import { media } from 'global';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${media.mobile.width}) {
  }

  @media screen and (min-width: ${media.mobile.width}) and (max-width: ${media
      .tablet.width}) {
  }
`;
