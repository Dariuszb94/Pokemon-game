import React, { useState } from 'react';
import ChosenPokemon from './components/ChosenPokemon';
import PokemonsList from './components/PokemonsList';

import styled from 'styled-components';

function App() {
  const [pokemonUrl, passPokemonUrl] = useState('');

  return (
    <ChoosePokemonWrapper>
      <PokemonsList passPokemonUrl={passPokemonUrl} />
      <ChosenPokemon pokemonUrl={pokemonUrl} />
    </ChoosePokemonWrapper>
  );
}

export default App;

const ChoosePokemonWrapper = styled.div`
  display: flex;
`;
