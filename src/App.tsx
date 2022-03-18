import React, { useState } from 'react';
import GameStart from './components/GameStart/GameStart';

function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      <GameStart setStart={setStart} />
    </>
  );
}

export default App;
