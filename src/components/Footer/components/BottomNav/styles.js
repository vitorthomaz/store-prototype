import styled from 'styled-components';
import { media } from 'global';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  label {
    font-size: 1.5em;
  }

  a {
    font-size: 1em;
  }

  @media screen and (max-width: ${media.mobile.width}) {
    label {
      font-size: 0.8em;
    }

    a {
      font-size: 0.6em;
    }
  }

  @media screen and (min-width: ${media.mobile.width}) and (max-width: ${media
      .tablet.width}) {
    label {
      font-size: 1em;
    }

    a {
      font-size: 0.7em;
    }
  }

  @media screen and (max-width: ${media.tablet.width}) {
    justify-content: center;
  }
`;

export const Title = styled.label``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${media.tablet.width}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Item = styled.li`
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
