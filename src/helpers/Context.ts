import { createContext, Dispatch, SetStateAction } from 'react';

export type TPokemonData = {
  name: string;
};
export type TPokemonDataContext = {
  pokemonData: TPokemonData;
  setPokemonData: Dispatch<SetStateAction<TPokemonData>>;
};
export const PokemonDataContext = createContext<TPokemonDataContext | null>(
  null
);
