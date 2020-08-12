import styled from 'styled-components';
import { whenMobile, whenTablet } from '../../global/media';

export const Form = styled.form`
  border-bottom: 4px solid black;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  ${whenMobile('input {font-size: 1.2em;}')};
  ${whenTablet('input {font-size: 1.7em;}')}
`;

export const SearchBar = styled.div`
  width: 450px;

  ${whenMobile('width: 250px;')}
  ${whenTablet('width: 350px;')}
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

  svg {
    width: 100%;
    height: 100%;
  }

  width: 48px;

  ${whenMobile('width: 32px;')}
  ${whenTablet('width: 40px;')}
`;

export const Button = styled.button`
  border: none;
  background: transparent;

  width: 100%;
  height: 100%;
`;

export const ProblemIndicator = styled.span`
  position: absolute;
  opacity: ${props => (props.opacity.length > 0 ? 1 : 0)};
  transition: opacity 0.4s;

  font-size: 0.75rem;
  color: red;
`;
