import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <div className="ui container">
      <div className="ui twelve column centered grid">
        <div className="six wide column">
          <LatestMovieReviewsContainer />
        </div>
        <div className="six wide column">
          <SearchableMovieReviewsContainer />
        </div>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);
