import React, { useContext, useState } from 'react';
import { PokemonDataContext } from '../../helpers/Context';
import { Oponent } from './FightComponents/Oponent';
import { YourFighter } from './FightComponents/YourFighter';

const Fight = () => {
  const pokemonDataContext = useContext(PokemonDataContext);
  const [yourHP, setYourHP] = useState(100);
  const [attackOponent, setAttackOponent] = useState(100);

  if (!pokemonDataContext) return null;
  const { pokemonData } = pokemonDataContext;
  return (
    <div>
      <YourFighter
        name={pokemonData.name}
        sprite={pokemonData.sprites.front_default}
        moves={pokemonData.moves}
        setAttackOponent={setAttackOponent}
      />
      <Oponent
        name={pokemonData.name}
        sprite={pokemonData.sprites.front_default}
        moves={pokemonData.moves}
        setYourHP={setYourHP}
        attackOponent={attackOponent}
      />
    </div>
  );
};

export default Fight;
