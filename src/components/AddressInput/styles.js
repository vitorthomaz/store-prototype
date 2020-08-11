import styled from 'styled-components';
import { media } from '../../global';

export const Form = styled.form`
  border-bottom: 4px solid black;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  @media screen and (max-width: ${media.mobile}) {
    input {
      font-size: 1.2em;
    }
  }

  @media screen and (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    input {
      font-size: 1.7em;
    }
  }
`;

export const SearchBar = styled.div`
  width: 450px;

  @media screen and (max-width: ${media.mobile}) {
    width: 250px;
  }

  @media screen and (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    width: 350px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: inherit;
  font-size: 2em;
  color: black;
  border: none;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 48px;
  height: 48px;

  @media screen and (max-width: ${media.mobile}) {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    width: 36px;
    height: 36px;
  }
`;

export const Button = styled.button`
  border: none;
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ProblemIndicator = styled.span`
  position: absolute;
  opacity: ${props => (props.opacity.length > 0 ? 1 : 0)};
  transition: opacity 0.4s;

  font-size: 0.75rem;
  color: red;
`;
