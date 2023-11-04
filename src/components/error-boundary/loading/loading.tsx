import './loading.css';

import { Component } from 'react';

import ImageLoading from '../../../assets/loading.png';

export class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src={ImageLoading} className="loading__image" alt="loading" />
      </div>
    );
  }
}
