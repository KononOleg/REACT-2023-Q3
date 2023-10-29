import './layout.css';

import { Component } from 'react';

import { ErrorBoundary } from '../../components/error-boundary';

type MyProps = {
  children: React.ReactNode;
};

export class Layout extends Component<MyProps> {
  render() {
    return (
      <div className="layout">
        <div className="layout__wrapper">
          <ErrorBoundary>
            <main className="main">{this.props.children}</main>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}
