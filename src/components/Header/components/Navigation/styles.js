import styled from 'styled-components';
import { whenMobile, whenTablet } from '../../../../global/media';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  svg {
    width: 54px;
    height: 54px;
  }

  ${whenMobile('svg {width: 40px; height: 40px;}')}

  ${whenTablet('svg {width: 48px; height: 48px;}')}
`;

export const Item = styled.li`
  margin: 20px 40px;
  font-size: 1rem;

  list-style-type: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  ${whenMobile('margin: 10px 15px;')}

  ${whenTablet('margin: 15px 30px;')}
`;
