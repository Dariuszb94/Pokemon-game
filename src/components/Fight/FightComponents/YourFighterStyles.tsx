import styled from 'styled-components';

export const PokemonName = styled.h2`
  text-transform: capitalize;
`;
export const MoveName = styled.div`
  text-transform: capitalize;
`;
export const MoveBox = styled.div`
  text-transform: capitalize;
  display: flex;
`;
export const MovePool = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
`;
export const Move = styled.div`
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 8px;
  border-radius: 4px;
`;
