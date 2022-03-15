import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
interface Props {
  pokemonUrl: string;
}
const ChosenPokemon: FC<Props> = ({ pokemonUrl }) => {
  const [sprite, setSprite] = useState('');
  const [name, setName]: [string, (error: string) => void] = useState('');

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);

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
          console.log(data);
          setName(name);
          setSprite(front_default);

          // setData(response.data.results);
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
          setLoading(false);
        });
    }
  }, [pokemonUrl]);
  useEffect(() => {
    console.log(pokemonUrl);
  }, [pokemonUrl]);
  return (
    <ChosenPokemonWrapper key={pokemonUrl}>
      <PokemonName>{name}</PokemonName>
      <PokemonSprite src={sprite} alt={name} width={200} height={200} />
    </ChosenPokemonWrapper>
  );
};

export default ChosenPokemon;

const PokemonName = styled.h2`
  text-transform: capitalize;
`;

const ChosenPokemonWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
const PokemonSprite = styled.img`
  animation-name: popup;
  animation-duration: 1s;
  animation-timing-function: linear;
  @keyframes popup {
    0% {
      transform: scale(0.1);
    }
    80% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
`;
