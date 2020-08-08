import styled from 'styled-components';

export const Card = styled.div`
  padding: 3px;
  margin: 0.5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: fit-content;

  background: #fafafa;
  border-radius: 6px;
`;

export const Title = styled.label`
  font-size: 12px;
`;

export const Image = styled.img`
  height: 100%;
  width: 10vw;
`;

export const Price = styled.label``;

export const CartZone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
