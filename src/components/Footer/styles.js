import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  padding: ${props => props.theme.spacing.padding.footer};

  background: ${props => props.theme.colors.lightGray};
`;

export const Author = styled.div`
  width: fit-content;
`;
