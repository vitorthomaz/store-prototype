import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  display: grid;

  grid-template-rows: 100px 1fr 200px;
  grid-template-columns: 1fr;

  grid-template-areas:
    'header'
    'section'
    'footer';
`;

export const Section = styled.section`
  grid-area: section;
  background: ${props => props.theme.colors.white};
`;
