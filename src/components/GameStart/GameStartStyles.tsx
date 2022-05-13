import styled from 'styled-components';

export const ChoosePokemon = styled.div`
  display: flex;
  height: calc(100% - 120px);
  > section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const ChoosePokemonWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.h1`
  text-align: center;
`;
export const Button = styled.button`
  outline: none;
  border: none;
  padding: 16px 32px;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
`;
