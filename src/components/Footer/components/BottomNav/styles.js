import styled from 'styled-components';
import { whenTablet } from '../../../../global/media';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${whenTablet('justify-content: center;')}
`;

export const Title = styled.label`
  font-size: 1.5em;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Item = styled.li`
  padding: 4px;
  list-style-type: none;

  a {
    font-size: 1em;
    margin: 2px;
  }

  span {
    margin: 0;
  }

  :hover {
    text-decoration: underline;
  }
`;
