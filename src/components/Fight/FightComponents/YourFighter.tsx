import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { TMove } from '../../../helpers/Context';
import { PokemonSprite } from '../../GameStart/GameStartComponents/ChoosenPokemon/ChosenPokemonStyles';
import { PokemonName } from './YourFighterStyles';

interface Props {
  name: string;
  sprite: string;
  moves: TMove[];
}
interface IMove {
  name: string;
  power: string;
}
export const YourFighter: FC<Props> = ({ name, sprite, moves }) => {
  const [error, setError]: [string, (error: string) => void] = useState('');
  const [movesToUse, setMovesToUse] = useState<IMove[]>([]);

  const getMove = (url: string) => {
    if (url) {
      return axios
        .get<any>(url)
        .then((response) => {
          const move: IMove = {
            name: response.data.name,
            power: response.data.power,
          };
          setMovesToUse((prev) => [...prev, move]);
          // setName(name);
          // setSprite(front_default);
          // setPokemonData(data);
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
  };
  useEffect(() => {
    moves.forEach(({ move }) => {
      getMove(move.url);
    });
  }, []);
  return (
    <div>
      <PokemonName>{name}</PokemonName>
      <PokemonSprite src={sprite} alt={name} width={200} height={200} />
      {movesToUse.map(({ name, power }) => (
        <div>{name}</div>
      ))}
    </div>
  );
};
