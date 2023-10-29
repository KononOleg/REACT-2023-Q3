import './search.css';

import { Component } from 'react';

type MyProps = {
  searchValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
};

export class Search extends Component<MyProps> {
  constructor(props: MyProps) {
    super(props);
  }

  render() {
    return (
      <div className="search__wrapper">
        <input
          className="search__input"
          type="text"
          placeholder="Search movie"
          value={this.props.searchValue}
          onChange={this.props.handleChange}
        />
        <button className="search__button" onClick={this.props.handleSearch}>
          Search movie
        </button>
      </div>
    );
  }
}
