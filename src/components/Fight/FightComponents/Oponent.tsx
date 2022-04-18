import React, { FC, useEffect, useState } from 'react';
import { TMove } from '../../../helpers/Context';
import { PokemonSprite } from '../../GameStart/GameStartComponents/ChoosenPokemon/ChosenPokemonStyles';
import { PokemonName, YourFighterBox } from './YourFighterStyles';

interface Props {
  name: string;
  sprite: string;
  moves: TMove[];
  setYourHP: React.Dispatch<React.SetStateAction<number>>;
  attackOponent: number;
}

export const Oponent: FC<Props> = ({ setYourHP, attackOponent }) => {
  const [HP, setHP] = useState(90);
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
  useEffect(() => {
    setHP((prev) => prev - attackOponent);
  }, [attackOponent]);
  return (
    <YourFighterBox>
      <PokemonName>Rattata</PokemonName>
      HP: {HP}
      <PokemonSprite
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png'
        alt='Rattata'
        width={220}
        height={220}
      />
    </YourFighterBox>
  );
};
