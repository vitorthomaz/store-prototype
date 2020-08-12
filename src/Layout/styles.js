import styled from 'styled-components';
import { whenTablet, whenMobile } from '../global/media';

export const Container = styled.main`
  height: 100vh;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr 200px;

  grid-template-areas:
    'header'
    'section'
    'footer';

  ${whenMobile('grid-template-rows: 100px 1fr minmax(130px, auto);')}
  ${whenTablet('grid-template-rows: 120px 1fr minmax(150px, auto);')}
`;

export const Header = styled.header`
  grid-area: header;
  background: ${props => props.theme.colors.black};

  * {
    color: ${props => props.theme.colors.label};
  }
`;

export const Section = styled.section`
  grid-area: section;
  background: ${props => props.theme.colors.white};
`;

export const Footer = styled.footer`
  grid-area: footer;
  background: ${props => props.theme.colors.yellow};
`;
