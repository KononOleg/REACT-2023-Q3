import './main-page.css';

import { FC, useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Loading } from '../../components/error-boundary/loading';
import { getPokemons, searchPokemon } from '../../services/api';
import { Pokemon } from '../../types';
import { Results } from './components/results';
import { Search } from './components/search';

export const MainPage: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Pokemon[]>([]);
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchValue') || ''
  );
  const [count, setCount] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(12);
  const urlParams = new URLSearchParams(useLocation().search);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const pageParam = Number(urlParams.get('page'));
    if (pageParam) return pageParam;
    else return 1;
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    localStorage.setItem('searchValue', event.target.value);
  };

  const handleSearch = () => updateMovies();

  const updateMovies = useCallback(async () => {
    setIsLoading(true);
    const { results, count } = searchValue
      ? await searchPokemon(searchValue)
      : await getPokemons(pageSize, currentPage);
    setCount(count);
    setResults(results);
    setIsLoading(false);
  }, [currentPage, pageSize, searchValue]);

  useEffect(() => {
    updateMovies();
  }, [pageSize, currentPage, updateMovies]);

  return (
    <>
      {isLoading && <Loading />}
      <div className="main-page">
        <Search
          searchValue={searchValue}
          handleChange={handleChange}
          handleSearch={handleSearch}
        />
        <Results
          results={results}
          count={count}
          setPageSize={setPageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
        />
        <Outlet />
      </div>
    </>
  );
};
