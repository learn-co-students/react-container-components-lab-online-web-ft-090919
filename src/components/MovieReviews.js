// Code MovieReviews Here

import React from 'react'

const MovieReviews = (props) => {
  return(
    <div className="review-list">
      {generateReviews(props)}
    </div>  
  )

}

const generateReviews = (props) => {
  if(props.movieReviewData.length > 0){
    return props.movieReviewData.map((review, index) => {
      return (
        <div className="review" key={index}>
          <p>{review.display_title}</p>
        </div>
      )
    }
    )    
  }
}

export default MovieReviews