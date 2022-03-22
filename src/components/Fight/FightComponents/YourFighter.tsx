import React, { FC } from 'react';
import { TMove } from '../../../helpers/Context';
import { PokemonSprite } from '../../GameStart/GameStartComponents/ChoosenPokemon/ChosenPokemonStyles';
import { PokemonName } from './YourFighterStyles';

interface Props {
  name: string;
  sprite: string;
  moves: TMove[];
}

export const YourFighter: FC<Props> = ({ name, sprite, moves }) => {
  return (
    <div>
      <PokemonName>{name}</PokemonName>
      <PokemonSprite src={sprite} alt={name} width={200} height={200} />
      {moves.map(({ move }) => {
        return move.name;
      })}
    </div>
  );
};
