import './search.css';

import { FC, useState } from 'react';

type MyProps = {
  searchValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
};

export const Search: FC<MyProps> = ({
  searchValue,
  handleChange,
  handleSearch,
}) => {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => setHasError(true);

  if (hasError) throw new Error('Error in event handler');

  return (
    <div className="search__wrapper">
      <input
        className="search__input"
        type="text"
        placeholder="Search movie"
        value={searchValue}
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
