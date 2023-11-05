import './layout.css';

import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { ErrorBoundary } from '../../components/error-boundary';

export const Layout: FC = () => {
  return (
    <div className="layout">
      <div className="layout__wrapper">
        <ErrorBoundary>
          <main className="main">
            <Outlet />
          </main>
        </ErrorBoundary>
      </div>
    </div>
  );
};
