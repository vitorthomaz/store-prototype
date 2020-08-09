import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-left: 10px;
`;

export const Item = styled.li`
  margin: 0 30px;
  font-size: 1.3em;

  list-style-type: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;
