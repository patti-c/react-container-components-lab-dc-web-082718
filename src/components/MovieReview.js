import React from 'react'

const MovieReview = ({movie}) => {
  return(
    <div className="review">
      <hr></hr>
      <h3>{movie.display_title}</h3>
      <p>{movie.headline}</p>
      <p>{movie.summary_short}</p>
    </div>
  )
}

export default MovieReview
