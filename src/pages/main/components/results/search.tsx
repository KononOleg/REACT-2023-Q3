import './search.css';

import { Component } from 'react';

type MyProps = {};

type MyState = { searchValue: string };

export class Search extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { searchValue: localStorage.getItem('searchValue') || '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value });
    localStorage.setItem('searchValue', event.target.value);
  }
  render() {
    return (
      <div className="search__wrapper">
        <input
          className="search__input"
          type="text"
          placeholder="Search movie"
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <button className="search__button">Search movie</button>
      </div>
    );
  }
}
