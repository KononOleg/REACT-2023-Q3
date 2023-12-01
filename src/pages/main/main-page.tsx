import './main-page.css';

import { FC } from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../components/user';
import { useAppSelector } from '../../hooks/redux';
import { appSelector } from '../../store/reducers/app-slice';

export const MainPage: FC = () => {
  const { users } = useAppSelector(appSelector);

  return (
    <div className="main-page">
      <div className="main-page__links">
        <Link className="main-page__link" to="form-hook">
          Form Hook
        </Link>
        <Link className="main-page__link" to="form-uncontrolled">
          Form Uncontrolled
        </Link>
      </div>
      <ul className="users">
        {users.map((user, index) => (
          <li key={index}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
