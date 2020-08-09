import styled from 'styled-components';
import { media } from 'global';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  margin: 0 40px;

  list-style-type: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    font-weight: bold;
  }

  @media screen and (max-width: ${media.mobile.width}) {
    margin: 0 15px;
  }

  @media screen and (min-width: ${media.mobile.width}) and (max-width: ${media
      .tablet.width}) {
    margin: 0 30px;
  }
`;
