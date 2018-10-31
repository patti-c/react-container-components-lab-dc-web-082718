import React from 'react'
import MovieReview from './MovieReview'

const renderReview = (movie) => {
  return(
    <div className="review">
      <hr></hr>
      <h3>{movie.display_title}</h3>
      <p>{movie.headline}</p>
      <p>{movie.summary_short}</p>
    </div>
  )
}

const MovieReviews = props => {

  return(
    <div className="review-list" style={{border: '1rem'}}>
      {props.reviews.map(renderReview)}
    </div>
  )

}

export default MovieReviews
