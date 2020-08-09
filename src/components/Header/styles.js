import styled from 'styled-components';
import { media } from 'global';

export const Container = styled.header`
  grid-area: header;
  background: ${props => props.theme.colors.yellow};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Sized = styled.div`
  margin: 32px 64px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 1.5em;

  @media screen and (max-width: ${media.mobile.width}) {
    margin: 8px 32px;
    font-size: 1em;
  }

  @media screen and (min-width: ${media.mobile.width}) and (max-width: ${media
      .tablet.width}) {
    margin: 16px 32px;
    font-size: 1.2em;
  }
`;
