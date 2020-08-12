import styled from 'styled-components';

export const Container = styled.table`
  margin-bottom: 50px;

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

  tfoot {
    font-size: 1.2rem;
    font-weight: bold;
  }

  font-size: 1rem;
`;
