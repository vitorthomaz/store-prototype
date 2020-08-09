import styled from 'styled-components';
import { media } from 'global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: ${media.tablet.width}) {
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Text = styled.label`
  margin: 3px;
`;
