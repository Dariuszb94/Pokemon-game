import React, { useContext, useEffect, useState } from 'react';
import { PokemonDataContext } from '../../helpers/Context';
import { Oponent } from './FightComponents/Oponent';
import { YourFighter } from './FightComponents/YourFighter';

const Fight = () => {
  const pokemonDataContext = useContext(PokemonDataContext);
  const [yourHP, setYourHP] = useState(100);
  const [attack, setAttack] = useState({ power: 0, attacker: '' });
  useEffect(() => {
    console.log(attack);
  }, [attack]);
  if (!pokemonDataContext) return null;
  const { pokemonData } = pokemonDataContext;
  return (
    <div>
      <YourFighter
        name={pokemonData.name}
        sprite={pokemonData.sprites.front_default}
        moves={pokemonData.moves}
        setAttack={setAttack}
      />
      <Oponent
        name={pokemonData.name}
        sprite={pokemonData.sprites.front_default}
        moves={pokemonData.moves}
        setYourHP={setYourHP}
        setAttack={setAttack}
      />
    </div>
  );
};

export default Fight;
