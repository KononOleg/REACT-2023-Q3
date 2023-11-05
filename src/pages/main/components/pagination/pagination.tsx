import './pagination.css';

import { Dispatch, FC, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

type MyProps = {
  count: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export const Pagination: FC<MyProps> = ({
  count,
  currentPage,
  setCurrentPage,
  pageSize,
}) => {
  const totalPages = Math.ceil(count / pageSize);
  const handlePrevClick = () => setCurrentPage(Math.max(currentPage - 1, 1));
  const handleNextClick = () =>
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  return (
    <div className="pagination">
      <Link to={`/?page=${currentPage - 1}`}>
        <button className="pagination__button" onClick={handlePrevClick}>
          &lt;
        </button>
      </Link>
      <p>{currentPage}</p>
      <Link to={`/?page=${currentPage + 1}`}>
        <button className="pagination__button" onClick={handleNextClick}>
          &gt;
        </button>
      </Link>
    </div>
  );
};
