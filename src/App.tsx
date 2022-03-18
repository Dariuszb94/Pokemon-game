import React, { useState } from 'react';
import Fight from './components/Fight/Fight';
import GameStart from './components/GameStart/GameStart';
import { PokemonUrlContext } from './helpers/Context';
function App() {
  const [start, setStart] = useState(false);
  const [pokemonUrl, setPokemonUrl] = useState('');
  return (
    <PokemonUrlContext.Provider value={{ pokemonUrl, setPokemonUrl }}>
      {!start ? <GameStart setStart={setStart} /> : <Fight />}
    </PokemonUrlContext.Provider>
  );
}

export default App;
