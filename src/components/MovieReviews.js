import React from 'react'

const MovieReviews = props => {

  const renderReviews = () => {
    return props.reviews.map((review, i) => {
      return <li key={i} className="review"><a href={review.link.url}>{review.headline}</a></li>
    })
  }

  return (
    <div className="review-list">
      <ul style={{listStyle: "none"}}>
        {renderReviews()}
      </ul>
    </div>
  )
}

export default MovieReviews
