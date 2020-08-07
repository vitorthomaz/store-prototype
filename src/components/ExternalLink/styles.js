import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: fit-content;
  height: fit-content;

  margin: 5px;

  text-decoration: none;
  color: black;

  :visited {
    color: black;
  }
`;

export const Text = styled.span`
  margin-left: 0.5em;
`;
