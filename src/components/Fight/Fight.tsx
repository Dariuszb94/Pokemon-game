import React, { useContext, useEffect, useState } from 'react';
import { PokemonDataContext } from '../../helpers/Context';
import { Oponent } from './FightComponents/Oponent';
import { YourFighter } from './FightComponents/YourFighter';

const Fight = () => {
  const pokemonDataContext = useContext(PokemonDataContext);
  const [yourFighterHP, setYourFighterHP] = useState(100);
  const [oponentHP, setOponentHP] = useState(100);

  const [attack, setAttack] = useState({ power: 0, attacker: '' });
  useEffect(() => {
    if (attack.attacker === 'YourFighter')
      setOponentHP((prev) => prev - attack.power);

    if (attack.attacker === 'Oponent')
      setYourFighterHP((prev) => prev - attack.power);
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
        yourFighterHP={yourFighterHP}
      />
      <Oponent
        name={pokemonData.name}
        sprite={pokemonData.sprites.front_default}
        moves={pokemonData.moves}
        oponentHP={oponentHP}
        setAttack={setAttack}
      />
    </div>
  );
};

export default Fight;
