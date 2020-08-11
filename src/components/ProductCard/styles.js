import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  background: #fafafa;
  border-radius: 6px;
  transition: all 500ms;

  :hover {
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  width: 100%;
`;

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
  align-items: center;
  width: 100%;
`;

export const Quantity = styled.h3`
  margin: 0 1em;
  font-size: 1em;
  font-weight: normal;
`;
