import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.yellow};

  padding: ${props => props.theme.spacing.padding.header};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled.li`
  list-style-type: none;
  cursor: pointer;

  font-size: 1.3em;

  :hover {
    font-weight: bold;
  }
`;
