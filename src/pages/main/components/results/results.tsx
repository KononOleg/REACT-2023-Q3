import './results.css';

import { FC } from 'react';

import ImageNotFound from '../../../../assets/image-not-found.png';
import { Pokemon } from '../../../../types';

type MyProps = { results: Pokemon[] };

export const Results: FC<MyProps> = ({ results }) => {
  return (
    <div className="results__wrapper">
      {results && results.length ? (
        results.map(({ id, name, image }) => (
          <div key={id} className="pokemon">
            {image ? (
              <img className="pokemon__image" src={image} alt="image" />
            ) : (
              <img className="pokemon__image" src={ImageNotFound} alt="image" />
            )}
            <p>{name}</p>
          </div>
        ))
      ) : (
        <p className="results__empty">No results found</p>
      )}
    </div>
  );
};
