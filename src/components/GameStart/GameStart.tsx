import React, { useState } from 'react';
import ChosenPokemon from './GameStartComponents/ChoosenPokemon/ChosenPokemon';
import PokemonsList from './GameStartComponents/PokemonList/PokemonsList';
import { ChoosePokemon, ChoosePokemonWrapper, Header } from './GameStartStyles';

const GameStart = () => {
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
};

export default GameStart;
