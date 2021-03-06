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
    if (attack.attacker === 'YourFighter') {
      oponentHP > attack.power
        ? setOponentHP((prev) => prev - attack.power)
        : setOponentHP(0);
    }

    if (attack.attacker === 'Oponent') {
      yourFighterHP > attack.power
        ? setYourFighterHP((prev) => prev - attack.power)
        : setYourFighterHP(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attack]);

  if (!pokemonDataContext) return null;
  const { pokemonData } = pokemonDataContext;

  return (
    <section>
      <h2>Fight</h2>
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
    </section>
  );
};

export default Fight;
