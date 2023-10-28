import './results.css';

import { Component } from 'react';

import { Movie } from '../../../../types';

type MyProps = { results: Movie[] };

export class Results extends Component<MyProps> {
  constructor(props: MyProps) {
    super(props);
  }
  render() {
    return (
      <div className="results__wrapper">
        {this.props.results.map(({ id, title, image }) => (
          <div key={id} className="movie">
            <img src={image} alt="movie" />
            <p>{title}</p>
          </div>
        ))}
      </div>
    );
  }
}
