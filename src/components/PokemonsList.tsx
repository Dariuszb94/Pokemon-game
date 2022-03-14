import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { v4 as uuidv4 } from 'uuid';

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
  passPokemonUrl: React.Dispatch<React.SetStateAction<string>>;
}
const PokemonsList: FC<Props> = ({ passPokemonUrl }) => {
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);

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
        setLoading(false);
      });
  }, []);
  return (
    <section>
      <List>
        {data?.map(({ name, url }) => (
          <ListElement key={uuidv4()} onClick={() => passPokemonUrl(url)}>
            <ListedPokemon>{name}</ListedPokemon>
          </ListElement>
        ))}
      </List>
    </section>
  );
};

export default PokemonsList;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 70%;
  overflow: scroll;
`;
const ListElement = styled.li`
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const ListedPokemon = styled.span`
  text-transform: capitalize;
`;
