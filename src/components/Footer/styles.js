import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  padding: ${props => props.theme.spacing.padding.footer};

  background: ${props => props.theme.colors.lightGray};
`;

export const Column = styled.div``;

export const Title = styled.h3``;

export const Element = styled.li`
  list-style-type: none;

  justify-content: center;
  padding: 5px 0;
`;
