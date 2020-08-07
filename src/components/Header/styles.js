import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.yellow};

  padding: ${props => props.theme.spacing.page};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled.li`
  list-style-type: none;
  cursor: pointer;

  font-size: 1.5em;
  margin: 0 10px;
  padding: 3px;

  :hover {
    font-weight: bold;
  }
`;
