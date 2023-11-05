import './main-page.css';

import { FC, useState } from 'react';

import { Loading } from '../../components/error-boundary/loading';
import { getPokemons, searchPokemon } from '../../services/api';
import { Pokemon } from '../../types';
import { Results } from './components/results';
import { Search } from './components/search';

type MyState = { results: Pokemon[]; searchValue: string; isLoading: boolean };

export const MainPage: FC<MyState> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Pokemon[]>([]);
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchValue') || ''
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    localStorage.setItem('searchValue', event.target.value);
  };

  const handleSearch = () => updateMovies();

  const updateMovies = async () => {
    setIsLoading(true);
    const { results } = searchValue
      ? await searchPokemon(searchValue)
      : await getPokemons();

    setResults(results);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="main-page">
        <Search
          searchValue={searchValue}
          handleChange={handleChange}
          handleSearch={handleSearch}
        />
        <Results results={results} />
      </div>
    </>
  );
};
