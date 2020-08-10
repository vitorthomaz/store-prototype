import styled from 'styled-components';
import { media } from 'global';

export const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardGrid = styled.div`
  padding: 1rem 2rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: 1fr; */
  /* grid-auto-rows: minmax(200px, 450px); */
  grid-gap: 45px;

  @media screen and (max-width: ${media.mobile.width}) {
    grid-template-columns: 1fr 1fr;

    grid-gap: 15px;
  }

  @media screen and (min-width: ${media.mobile.width}) and (max-width: ${media
      .tablet.width}) {
    grid-template-columns: repeat(2, minmax(200px, 320px));
    grid-auto-rows: minmax(270px, 430px);
    grid-gap: 30px;
  }
`;
