import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  table,
  td,
  th {
    border: 1px solid #ddd;
    border-collapse: collapse;
  }
`;

export const Title = styled.h2`
  padding: 2rem 0;
`;
