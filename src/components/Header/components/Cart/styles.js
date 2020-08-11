import styled from 'styled-components';

export const Container = styled.div`
  svg {
    width: 54px;
    height: 54px;
  }

  label {
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: ${props => props.theme.media.mobile}) {
    svg {
      width: 40px;
      height: 40px;
    }

    label {
      width: 14px;
      height: 14px;
    }
  }

  @media screen and (min-width: ${props =>
      props.theme.media.mobile}) and (max-width: ${props =>
      props.theme.media.tablet}) {
    svg {
      width: 48px;
      height: 48px;
    }

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
