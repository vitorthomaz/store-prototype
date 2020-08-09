import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  padding: 0;
`;

export const Item = styled.li`
  font-size: 0.7em;

  a {
    margin: 2px;
  }

  span {
    margin: 0;
  }

  list-style-type: none;
  :hover {
    text-decoration: underline;
  }
`;
