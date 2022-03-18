import React, { FC, useState } from 'react';
import ChosenPokemon from './GameStartComponents/ChoosenPokemon/ChosenPokemon';
import PokemonsList from './GameStartComponents/PokemonList/PokemonsList';
import {
  Button,
  ChoosePokemon,
  ChoosePokemonWrapper,
  Header,
} from './GameStartStyles';

interface Props {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}
const GameStart: FC<Props> = ({ setStart }) => {
  const [pokemonUrl, passPokemonUrl] = useState('');

  return (
    <ChoosePokemonWrapper>
      <Header>Choose your fighter!</Header>
      <ChoosePokemon>
        <PokemonsList passPokemonUrl={passPokemonUrl} />
        <ChosenPokemon pokemonUrl={pokemonUrl} />
      </ChoosePokemon>
      <Button onClick={() => setStart(true)}>Fight!</Button>
    </ChoosePokemonWrapper>
  );
};

export default GameStart;
