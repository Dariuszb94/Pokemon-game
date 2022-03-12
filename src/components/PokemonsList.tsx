import axios from 'axios';
import React, { useEffect, useState } from 'react';
interface IData {
  count: number;
  next?: string;
  previous?: null;
  results: TPokemon[];
}

type TPokemon = {
  name: string;
  url: string;
};
const PokemonsList = () => {
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] =
    React.useState('');

  const [data, setData] = useState<TPokemon[]>([]);

  useEffect(() => {
    axios
      .get<IData>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
        console.log(response.data);
        setData(response.data.results);
      })
      .catch((ex) => {
        let error = axios.isCancel(ex)
          ? 'Request Cancelled'
          : ex.code === 'ECONNABORTED'
          ? 'A timeout has occurred'
          : ex.response.status === 404
          ? 'Resource Not Found'
          : 'An unexpected error has occurred';

        setError(error);
        setLoading(false);
      });
  }, []);
  return <div>pokemonsList</div>;
};

export default PokemonsList;
