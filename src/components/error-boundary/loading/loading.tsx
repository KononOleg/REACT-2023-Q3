import './loading.css';

import { FC } from 'react';

import ImageLoading from '../../../assets/loading.png';

export const Loading: FC = () => {
  return (
    <div className="loading">
      <img src={ImageLoading} className="loading__image" alt="loading" />
    </div>
  );
};
