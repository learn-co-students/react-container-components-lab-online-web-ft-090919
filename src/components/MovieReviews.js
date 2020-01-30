import React from 'react'
// Code MovieReviews Here

const MovieReviews = props => {
    return (
        <div className="review-list">

            <h2>{props.title}</h2>
            <h3>{props.rating}</h3>
            <h4>{props.headline}</h4>
            <p>{props.summary}</p>
            <br></br>

            
        </div>
    )
}

export default MovieReviews
