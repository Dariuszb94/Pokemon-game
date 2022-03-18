import { createContext } from 'react';

export const PokemonUrlContext = createContext({
  pokemonUrl: '',
  setPokemonUrl: (_value: string) => {},
});

export type GlobalContent = {
  pokemonUrl: string;
  setPokemonUrl: React.Dispatch<React.SetStateAction<string>>;
};
