import './main-page.css';

import { Component } from 'react';

import { getMovies } from '../../services/api';
import { Movie } from '../../types';
import { Results } from './components/results';
import { Search } from './components/search';

type MyState = { results: Movie[]; searchValue: string };

export class MainPage extends Component<object, MyState> {
  constructor(props: object) {
    super(props);
    this.state = {
      results: [],
      searchValue: localStorage.getItem('searchValue') || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value });
    localStorage.setItem('searchValue', event.target.value);
  }

  handleSearch() {
    this.updateMovies();
  }

  componentDidMount() {
    this.updateMovies();
  }

  async updateMovies() {
    const results = await getMovies(this.state.searchValue);
    this.setState({ results });
  }

  render() {
    return (
      <div className="main-page">
        <Search
          searchValue={this.state.searchValue}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        <Results results={this.state.results} />
      </div>
    );
  }
}
