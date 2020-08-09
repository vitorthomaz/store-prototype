import styled from 'styled-components';

export const Container = styled.footer`
  background: ${props => props.theme.colors.lightGray};
  grid-area: footer;
`;

export const Sized = styled.div`
  margin: 0 12%;
  height: 100%;
  /* First break point */
  min-width: 400px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Column = styled.div``;

export const Title = styled.label`
  font-size: 0.9em;
`;
