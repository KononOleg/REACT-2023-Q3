import './main-page.css';

import { Component } from 'react';

import { Search } from './components/search';

export class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <Search />
      </div>
    );
  }
}
