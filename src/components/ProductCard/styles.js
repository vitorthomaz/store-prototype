import styled from 'styled-components';
import { media } from 'global';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #fafafa;
  border: 5px solid #ebebeb;
  border-radius: 6px;
`;

export const Image = styled.img`
  width: 100%;
`;

// export const Hr = styled.hr``;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 12px;
`;

export const Price = styled.h2``;

export const CartZone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
