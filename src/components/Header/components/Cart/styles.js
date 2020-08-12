import styled from 'styled-components';

export const Container = styled.div``;

export const Counter = styled.label`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 18px;
  height: 18px;

  font-size: 14px;
  border-radius: 100%;

  background: ${props => props.theme.colors.black};
`;
