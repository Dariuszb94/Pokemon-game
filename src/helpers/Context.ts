import { createContext, Dispatch, SetStateAction } from 'react';
export const defaultPokemonData = {
  name: 'bulbasaur',
  moves: [
    {
      move: {
        name: 'razor-wind',
        url: 'https://pokeapi.co/api/v2/move/13/',
      },
    },
    {
      move: {
        name: 'cut',
        url: 'https://pokeapi.co/api/v2/move/15/',
      },
    },
    {
      move: {
        name: 'vine-whip',
        url: 'https://pokeapi.co/api/v2/move/22/',
      },
    },
    {
      move: {
        name: 'headbutt',
        url: 'https://pokeapi.co/api/v2/move/29/',
      },
    },
  ],
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
};
export type TMove = {
  move: {
    name: string;
  };
};
export type TPokemonData = {
  name: string;
  sprites: {
    front_default: string;
  };
  moves: TMove[];
};
export type TPokemonDataContext = {
  pokemonData: TPokemonData;
  setPokemonData: Dispatch<SetStateAction<TPokemonData>>;
};
export const PokemonDataContext = createContext<TPokemonDataContext | null>(
  null
);
