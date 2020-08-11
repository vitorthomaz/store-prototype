import styled from 'styled-components';
import { media } from '../../../../global';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  margin: 20px 40px;
  font-size: 1rem;

  list-style-type: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: ${media.mobile}) {
    margin: 10px 15px;
  }

  @media screen and (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    margin: 15px 30px;
  }
`;
