import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import {
  ChosenPokemonWrapper,
  ErrorMessage,
  PokemonName,
  PokemonSprite,
} from './ChosenPokemonStyles';
interface Props {
  pokemonUrl: string;
}
const ChosenPokemon: FC<Props> = ({ pokemonUrl }) => {
  const [sprite, setSprite] = useState(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  );
  const [name, setName]: [string, (error: string) => void] =
    useState('Bulbasaur');

  const [error, setError]: [string, (error: string) => void] = useState('');

  useEffect(() => {
    if (pokemonUrl.length) {
      axios
        .get<any>(pokemonUrl)
        .then((response) => {
          const data = response.data;
          const {
            name,
            sprites: { front_default },
          } = data;
          setName(name);
          setSprite(front_default);
        })
        .catch((ex) => {
          let error = axios.isCancel(ex)
            ? 'Request Cancelled'
            : ex.code === 'ECONNABORTED'
            ? 'A timeout has occurred'
            : ex.response.status === 404
            ? 'Resource Not Found'
            : 'An unexpected error has occurred';

          setError(error);
        });
    }
  }, [pokemonUrl]);

  return (
    <ChosenPokemonWrapper key={pokemonUrl}>
      {error && <ErrorMessage>There is an error</ErrorMessage>}
      <PokemonName>{name}</PokemonName>
      <PokemonSprite src={sprite} alt={name} width={200} height={200} />
    </ChosenPokemonWrapper>
  );
};

export default ChosenPokemon;