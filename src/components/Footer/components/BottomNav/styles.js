import styled from 'styled-components';
import { media } from '../../../../global';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  label {
    font-size: 1.5rem;
  }

  a {
    font-size: 1rem;
  }

  @media screen and (max-width: ${media.tablet}) {
    justify-content: center;
  }
`;

export const Title = styled.label``;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Item = styled.li`
  padding: 4px;

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
