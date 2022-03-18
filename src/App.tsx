import React, { useState } from 'react';
import Fight from './components/Fight/Fight';
import GameStart from './components/GameStart/GameStart';
import { PokemonDataContext, TPokemonData } from './helpers/Context';
function App() {
  const [start, setStart] = useState(false);
  const [pokemonData, setPokemonData] = useState<TPokemonData>({
    name: 'Bulbasaur',
  });

  return (
    <PokemonDataContext.Provider value={{ pokemonData, setPokemonData }}>
      {!start ? <GameStart setStart={setStart} /> : <Fight />}
    </PokemonDataContext.Provider>
  );
}

export default App;
