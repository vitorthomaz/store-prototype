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
  background: ${props => props.theme.colors.yellow};
  border-radius: 100%;
`;
