import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  background: ${props => props.theme.colors.yellow};
`;

export const Sized = styled.div`
  margin: 0 12%;
  height: 100%;
  /* First break point */
  min-width: 400px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
