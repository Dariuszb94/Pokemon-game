import React, { FC, useEffect, useState } from 'react';
import { TMove } from '../../../helpers/Context';
import { PokemonSprite } from '../../GameStart/GameStartComponents/ChoosenPokemon/ChosenPokemonStyles';
import { PokemonName, YourFighterBox } from './YourFighterStyles';

interface Props {
  name: string;
  sprite: string;
  moves: TMove[];
  oponentHP: number;
  setAttack: React.Dispatch<
    React.SetStateAction<{
      power: number;
      attacker: string;
    }>
  >;
}

export const Oponent: FC<Props> = ({ oponentHP, setAttack }) => {
  const [HP, setHP] = useState(90);
  const moves = [
    {
      name: 'Cut',
      power: 30,
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
  useEffect(() => {
    setAttack({
      power: 20,
      attacker: 'Oponent',
    });
  }, [oponentHP, setAttack]);
  return (
    <YourFighterBox>
      <PokemonName>Rattata</PokemonName>
      HP: {oponentHP}
      <PokemonSprite
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png'
        alt='Rattata'
        width={220}
        height={220}
      />
    </YourFighterBox>
  );
};
