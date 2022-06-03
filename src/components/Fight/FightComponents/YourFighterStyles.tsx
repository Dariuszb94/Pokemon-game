import styled from 'styled-components';

export const PokemonName = styled.h2`
  text-transform: capitalize;
  text-align: center;
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
  grid-gap: 16px;
`;
export const Move = styled.button`
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.35);
  padding: 12px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const YourFighterBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
