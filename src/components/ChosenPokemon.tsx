import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
interface Props {
  pokemonUrl: string;
}
const ChosenPokemon: FC<Props> = ({ pokemonUrl }) => {
  const [sprite, setSprite] = useState('');
  const [name, setName]: [string, (error: string) => void] = useState('');

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = useState('');

  useEffect(() => {
    if (pokemonUrl.length) {
      axios
        .get<any>(pokemonUrl)
        .then((response) => {
          const data = response.data;
          const {
            name,
            sprites: { front_default },
          } = data;
          setName(name);
          setSprite(front_default);

          // setData(response.data.results);
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
    }
  }, [pokemonUrl]);
  return (
    <section>
      {name}
      <br />
      <img src={sprite} alt={name} />
    </section>
  );
};

export default ChosenPokemon;
