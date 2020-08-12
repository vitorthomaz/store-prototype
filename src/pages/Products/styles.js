import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h2`
  padding: 2rem 0;
`;

export const CardGrid = styled.div`
  width: 90%;

  display: grid;
  grid-gap: 2rem;

  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;
