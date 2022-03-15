import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
interface Props {
  pokemonUrl: string;
}
const ChosenPokemon: FC<Props> = ({ pokemonUrl }) => {
  const [sprite, setSprite] = useState(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  );
  const [name, setName]: [string, (error: string) => void] =
    useState('Bulbasaur');

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
  animation-name: slide-down;
  animation-duration: 0.8s;
  animation-timing-function: linear;
  @keyframes slide-down {
    0% {
      transform: translateY(-120px);
    }
    60% {
      transform: translateY(40px) rotate(-10deg);
    }
    80% {
      transform: translateY(-30px) rotate(8deg);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const ChosenPokemonWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
const PokemonSprite = styled.img`
  animation-name: popup;
  animation-duration: 0.8s;
  animation-timing-function: linear;
  @keyframes popup {
    0% {
      transform: scale(0.1);
    }
    80% {
      transform: scale(1.3);
    }

    100% {
      transform: scale(1);
    }
  }
`;
