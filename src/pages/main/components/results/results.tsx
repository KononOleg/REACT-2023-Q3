import './results.css';

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Dispatch, FC, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import ImageNotFound from '../../../../assets/image-not-found.png';
import { Pokemon } from '../../../../types';
import { Pagination } from '../pagination';

type MyProps = {
  results: Pokemon[];
  count: number;
  setPageSize: (pageSize: number) => void;
  pageSize: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  error: FetchBaseQueryError | SerializedError | undefined;
};

export const Results: FC<MyProps> = ({
  results,
  count,
  setPageSize,
  currentPage,
  setCurrentPage,
  pageSize,
  error,
}) => {
  const changeValue = (event: React.FormEvent<HTMLSelectElement>) => {
    setCurrentPage(1);
    setPageSize(event.currentTarget.value as unknown as number);
  };

  return (
    <div className="results__wrapper">
      <div className="results__parametres">
        <div className="results__size">
          <p>Page size:</p>
          <select
            className="results__select"
            defaultValue={pageSize}
            onChange={changeValue}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>
      <div className="results">
        {!error ? (
          results.map(({ id, name, image }) => (
            <Link
              key={id}
              className="pokemon"
              to={`modal?page=${currentPage}&details=${id}`}
            >
              {image ? (
                <img className="pokemon__image" src={image} alt="image" />
              ) : (
                <img
                  className="pokemon__image"
                  src={ImageNotFound}
                  alt="image"
                />
              )}
              <p>{name}</p>
            </Link>
          ))
        ) : (
          <p className="results__empty">No results found</p>
        )}
      </div>

      <Pagination
        count={count}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
