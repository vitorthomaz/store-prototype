import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: ${props => props.theme.spacing.page};

  background: ${props => props.theme.colors.white};
`;

export const Author = styled.div`
  width: fit-content;
`;
