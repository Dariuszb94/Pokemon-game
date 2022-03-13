import React, { useState } from 'react';
import ChosenPokemon from './components/ChosenPokemon';
import PokemonsList from './components/PokemonsList';
function App() {
  const [pokemonUrl, passPokemonUrl] = useState('');

  return (
    <div>
      {passPokemonUrl}
      <PokemonsList passPokemonUrl={passPokemonUrl} />
      <ChosenPokemon pokemonUrl={pokemonUrl} />
    </div>
  );
}

export default App;
