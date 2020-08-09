import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fafafa;
  border-radius: 6px;
`;

export const Title = styled.label`
  font-size: 12px;
`;

export const Image = styled.img`
  max-width: 100%;
  display: block;
`;

export const Price = styled.label``;

export const CartZone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
