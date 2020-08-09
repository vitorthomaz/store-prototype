import styled from 'styled-components';
import { media } from 'global';

export const Form = styled.form`
  border-bottom: 4px solid black;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  svg {
    width: 48px;
    height: 100%;
  }

  @media screen and (max-width: ${media.mobile.width}) {
    svg {
      width: 24px;
    }

    input {
      font-size: 1.2em;
    }
  }

  @media screen and (min-width: ${media.mobile.width}) and (max-width: ${media
      .tablet.width}) {
    svg {
      width: 36px;
    }

    input {
      font-size: 1.7em;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  background: inherit;
  font-size: 2em;
  color: black;
  border: none;
`;
