import axios from 'axios';
import React, { FC, useContext, useEffect, useState } from 'react';
import { ErrorMessage } from '../../../../shared/SharedUI';
import { List, ListElement, ListedPokemon } from './PokemonListStyles';
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
interface Props {
  setPokemonUrl: React.Dispatch<React.SetStateAction<string>>;
}
const PokemonsList: FC<Props> = ({ setPokemonUrl }) => {
  const [error, setError]: [string, (error: string) => void] =
    React.useState('');
  const [data, setData] = useState<TPokemon[]>([]);

  useEffect(() => {
    axios
      .get<IData>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
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
      });
  }, []);
  return (
    <section>
      {error && <ErrorMessage>There is an error</ErrorMessage>}
      <List>
        {data?.map(({ name, url }) => (
          <ListElement key={name} onClick={() => setPokemonUrl(url)}>
            <ListedPokemon>{name}</ListedPokemon>
          </ListElement>
        ))}
      </List>
    </section>
  );
};

export default PokemonsList;
