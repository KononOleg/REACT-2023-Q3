import './results.css';

import { Component } from 'react';

import ImageNotFound from '../../../../assets/image-not-found.png';
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
            {image ? (
              <img className="movie__image" src={image} alt="movie" />
            ) : (
              <img className="movie__image" src={ImageNotFound} alt="movie" />
            )}
            <p>{title}</p>
          </div>
        ))}
      </div>
    );
  }
}
