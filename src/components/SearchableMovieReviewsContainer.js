import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const SEARCHURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  fetchSearchedMovies(url) {
    return fetch(url).then(res => res.json())
  }

  setMoviesState = (moviesData) => {
    this.setState({
      reviews: moviesData.results
    })
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    const newURL = SEARCHURL + this.state.searchTerm;
    this.fetchSearchedMovies(newURL).then(this.setMoviesState)
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <h2>Searchable Movie Reviews</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onKeyUp={this.handleSearch}></input>
          <input type="submit"></input>
        </form>
        <hr></hr>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
