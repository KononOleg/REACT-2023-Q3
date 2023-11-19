import './search.css';

import { FC, useState } from 'react';

import { useAppDispatch } from '../../../../hooks/redux';
import { setSearchValue } from '../../../../store/reducers/app-slice';

type MyProps = {
  searchValue: string;
};

export const Search: FC<MyProps> = ({ searchValue }) => {
  const dispatch = useAppDispatch();
  const [hasError, setHasError] = useState<boolean>(false);
  const [pokemonName, setPokemonName] = useState(searchValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchValue(pokemonName));
  };

  const handleError = () => setHasError(true);

  if (hasError) throw new Error('Error in event handler');

  return (
    <div className="search__wrapper">
      <input
        className="search__input"
        type="text"
        placeholder="Search movie"
        value={pokemonName}
        onChange={handleChange}
      />
      <button className="button" onClick={handleSearch}>
        Search movie
      </button>
      <button className="button" onClick={handleError}>
        Throw error
      </button>
    </div>
  );
};
