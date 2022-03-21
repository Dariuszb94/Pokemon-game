import React, { useContext } from 'react';
import { PokemonDataContext } from '../../helpers/Context';

const Fight = () => {
  const pokemonDataContext = useContext(PokemonDataContext);

  if (!pokemonDataContext) return null;
  const { pokemonData } = pokemonDataContext;
  return <div>Fight{console.log(pokemonData)}</div>;
};

export default Fight;
