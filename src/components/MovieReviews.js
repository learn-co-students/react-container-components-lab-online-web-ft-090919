import React from 'react'

const MovieReviews = ({reviews}) => (
    <div className="review-list">
        {reviews.map(({headline}) => <div className="review"><h2>{headline}</h2></div>)}
    </div>
)

export default MovieReviews