import './results.css';

import { Dispatch, FC, SetStateAction } from 'react';

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
};

export const Results: FC<MyProps> = ({
  results,
  count,
  setPageSize,
  currentPage,
  setCurrentPage,
  pageSize,
}) => {
  const changeValue = (event: React.FormEvent<HTMLSelectElement>) =>
    setPageSize(event.currentTarget.value as unknown as number);

  return (
    <div className="results__wrapper">
      <div className="results__parametres">
        <p>Total: {count}</p>
        <div className="results__size">
          <p>Page size:</p>
          <select
            className="results__select"
            defaultValue={'12'}
            onChange={changeValue}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>
      <div className="results">
        {results && results.length ? (
          results.map(({ id, name, image }) => (
            <div key={id} className="pokemon">
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
            </div>
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
