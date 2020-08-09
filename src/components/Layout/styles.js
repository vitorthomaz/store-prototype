import styled from 'styled-components';
import { media } from 'global';

export const Container = styled.main`
  height: 100vh;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr 300px;

  grid-template-areas:
    'header'
    'section'
    'footer';

  @media screen and (max-width: ${media.mobile.width}) {
    grid-template-rows: 100px 1fr 100px;
  }

  @media screen and (min-width: ${media.mobile.width}) and (max-width: ${media
      .tablet.width}) {
    grid-template-rows: 120px 1fr 120px;
  }
`;

export const Section = styled.section`
  grid-area: section;
  background: ${props => props.theme.colors.white};
`;
