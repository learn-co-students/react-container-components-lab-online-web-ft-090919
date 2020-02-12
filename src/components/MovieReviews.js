// Code MovieReviews Here
import React, { Component } from 'react'

const MovieReviews = (props) => {
        return(
            <ul className="review-list">
                {props.reviews.map(movie =>
                
                <li className="review">
                    <img src={movie.multimedia}></img>
                    <h4>{movie.display_title}</h4>
                    <p>{movie.summary_short}</p>
                </li>

                )}
            </ul>
        )
}

export default MovieReviews
