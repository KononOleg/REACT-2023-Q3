import './search.css';

import { Component } from 'react';

type MyProps = {
  searchValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
};

type MyState = {
  hasError: boolean;
};

export class Search extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      hasError: false,
    };
    this.handleError = this.handleError.bind(this);
  }

  handleError() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      throw new Error('Error in event handler');
    }
    return (
      <div className="search__wrapper">
        <input
          className="search__input"
          type="text"
          placeholder="Search movie"
          value={this.props.searchValue}
          onChange={this.props.handleChange}
        />
        <button className="button" onClick={this.props.handleSearch}>
          Search movie
        </button>
        <button className="button" onClick={this.handleError}>
          Throw error
        </button>
      </div>
    );
  }
}
