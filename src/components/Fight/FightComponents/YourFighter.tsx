import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { TMove } from '../../../helpers/Context';
import { PokemonSprite } from '../../GameStart/GameStartComponents/ChoosenPokemon/ChosenPokemonStyles';
import { PokemonName, MoveName } from './YourFighterStyles';

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
            name: response.data.name.replace('-', ' '),
            power: response.data.power,
          };

          setMovesToUse((prev) => {
            return [...prev, move];
          });
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
    if (!movesToUse.length)
      moves.forEach(({ move }) => {
        getMove(move.url);
      });
  }, [moves, movesToUse]);
  return (
    <section>
      {error && error}
      <PokemonName>{name}</PokemonName>
      <PokemonSprite src={sprite} alt={name} width={220} height={220} />
      {movesToUse.map(({ name, power }) => (
        <>
          <MoveName>{name}</MoveName>
          <span>{power}</span>
        </>
      ))}
    </section>
  );
};
