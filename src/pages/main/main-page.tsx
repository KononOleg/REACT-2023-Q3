import './main-page.css';

import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Loading } from '../../components/error-boundary/loading';
import { useAppSelector } from '../../hooks/redux';
import { useGetPokemonsQuery } from '../../services/PokemonApi';
import { appSelector } from '../../store/reducers/app-slice';
import { Results } from './components/results';
import { Search } from './components/search';

export const MainPage: FC = () => {
  const { searchValue } = useAppSelector(appSelector);

  const [pageSize, setPageSize] = useState<number>(8);
  const urlParams = new URLSearchParams(useLocation().search);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    data: results,
    isFetching,
    error,
  } = useGetPokemonsQuery({
    pageSize,
    currentPage,
    searchValue,
  });

  useEffect(() => {
    setCurrentPage(() => {
      const pageParam = Number(urlParams.get('page'));
      if (pageParam && pageParam > 1) return pageParam;
      else return 1;
    });
  }, [urlParams]);

  return (
    <>
      {isFetching && <Loading />}
      <div className="main-page">
        <Search searchValue={searchValue} />
        {results?.results && (
          <Results
            results={results?.results}
            count={results.count}
            setPageSize={setPageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={pageSize}
            error={error}
          />
        )}

        <Outlet />
      </div>
    </>
  );
};
