import React, { useState } from 'react';
import ChosenPokemon from './components/ChoosenPokemon/ChosenPokemon';
import PokemonsList from './components/PokemonList/PokemonsList';

import styled from 'styled-components';

function App() {
  const [pokemonUrl, passPokemonUrl] = useState('');

  return (
    <ChoosePokemonWrapper>
      <Header>Choose your fighter!</Header>
      <ChoosePokemon>
        <PokemonsList passPokemonUrl={passPokemonUrl} />
        <ChosenPokemon pokemonUrl={pokemonUrl} />
      </ChoosePokemon>
    </ChoosePokemonWrapper>
  );
}

export default App;

const ChoosePokemon = styled.div`
  display: flex;
  height: calc(100% - 100px);
  > section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ChoosePokemonWrapper = styled.div`
  height: 100vh;
`;
const Header = styled.h1`
  text-align: center;
`;
