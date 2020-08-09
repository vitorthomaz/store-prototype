import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 12%;
  height: 100%;
  /* First break point */
  min-width: 400px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 300px));
  grid-auto-rows: minmax(200px, 300px);

  grid-gap: 15px;
`;
