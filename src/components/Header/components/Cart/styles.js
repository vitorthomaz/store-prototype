import styled from 'styled-components';

export const Container = styled.div`
  label {
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: ${props => props.theme.media.mobile}) {
    label {
      width: 14px;
      height: 14px;
    }
  }

  @media screen and (min-width: ${props =>
      props.theme.media.mobile}) and (max-width: ${props =>
      props.theme.media.tablet}) {
    label {
      width: 14px;
      height: 14px;
    }
  }
`;

export const Counter = styled.label`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  background: ${props => props.theme.colors.yellow};
  border-radius: 100%;
`;
