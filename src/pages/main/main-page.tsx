import './main-page.css';

import { Component } from 'react';

import { Results } from './components/results';
import { Search } from './components/search';

export class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <Search />
        <Results results={[]} />
      </div>
    );
  }
}
