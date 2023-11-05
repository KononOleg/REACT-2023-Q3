import './layout.css';

import { FC } from 'react';

import { ErrorBoundary } from '../../components/error-boundary';

type MyProps = {
  children: React.ReactNode;
};

export const Layout: FC<MyProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__wrapper">
        <ErrorBoundary>
          <main className="main">{children}</main>
        </ErrorBoundary>
      </div>
    </div>
  );
};
