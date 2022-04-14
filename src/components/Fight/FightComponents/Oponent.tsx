import React, { FC } from 'react';
import { TMove } from '../../../helpers/Context';
import { PokemonSprite } from '../../GameStart/GameStartComponents/ChoosenPokemon/ChosenPokemonStyles';
import { PokemonName, YourFighterBox } from './YourFighterStyles';

interface Props {
  name: string;
  sprite: string;
  moves: TMove[];
}

export const Oponent: FC<Props> = () => {
  const moves = [
    {
      name: 'Cut',
      power: 40,
    },
    {
      name: 'Tackle',
      power: 30,
    },
    {
      name: 'Body slam',
      power: 45,
    },
    {
      name: 'Water gun',
      power: 40,
    },
  ];
  return (
    <YourFighterBox>
      <PokemonName>Rattata</PokemonName>
      <PokemonSprite
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png'
        alt='Rattata'
        width={200}
        height={200}
      />
    </YourFighterBox>
  );
};
