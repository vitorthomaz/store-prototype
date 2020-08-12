import styled from 'styled-components';
import { whenMobile, whenTablet } from '../../global/media';

export const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Author = styled.div`
  width: fit-content;
`;
