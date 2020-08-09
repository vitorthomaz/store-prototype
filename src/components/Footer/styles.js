import styled from 'styled-components';
import { media } from 'global';

export const Container = styled.footer`
  background: ${props => props.theme.colors.lightGray};
  grid-area: footer;

  display: flex;
  justify-content: center;

  @media screen and (max-width: ${media.tablet.width}) {
    div > a {
      display: none;
    }
  }
`;

export const Sized = styled.div`
  margin: 0 200px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${media.mobile.width}) {
    margin: 8px 32px;
  }

  @media screen and (min-width: ${media.mobile.width}) and (max-width: ${media
      .tablet.width}) {
    margin: 16px 32px;
  }
`;
