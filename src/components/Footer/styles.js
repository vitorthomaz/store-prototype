import styled from 'styled-components';
import { media } from 'global';

export const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1024px;

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
