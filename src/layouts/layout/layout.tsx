import './layout.css';

import { Component } from 'react';

type MyProps = {
  children: React.ReactNode;
};

export class Layout extends Component<MyProps> {
  render() {
    return (
      <div className="layout">
        <div className="layout__wrapper">
          <main className="main">{this.props.children}</main>
        </div>
      </div>
    );
  }
}
