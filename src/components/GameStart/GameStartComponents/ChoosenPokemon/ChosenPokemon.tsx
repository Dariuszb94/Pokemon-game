import axios from 'axios';
import React, { FC, useContext, useEffect, useState } from 'react';
import { ErrorMessage } from '../../../../shared/SharedUI';
import {
  ChosenPokemonWrapper,
  PokemonName,
  PokemonSprite,
} from './ChosenPokemonStyles';
import { PokemonDataContext } from '../../../../helpers/Context';

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

  const pokemonDataContext = useContext(PokemonDataContext);

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
          setPokemonData(data);
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

  if (!pokemonDataContext) return null;
  const { pokemonData, setPokemonData } = pokemonDataContext;

  return (
    <ChosenPokemonWrapper key={pokemonUrl}>
      {error && <ErrorMessage>There is an error</ErrorMessage>}
      {console.log(pokemonData)}
      <PokemonName>{pokemonData.name}</PokemonName>
      <PokemonSprite src={sprite} alt={name} width={200} height={200} />
    </ChosenPokemonWrapper>
  );
};

export default ChosenPokemon;
