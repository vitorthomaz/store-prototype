import styled from 'styled-components';

export const Container = styled.table`
  * {
    vertical-align: center;
    text-align: center;
  }

  thead,
  tr:nth-child(even) {
    background: #ccc;
  }

  td,
  th {
    padding: 12px;
  }

  font-size: 1rem;
`;
