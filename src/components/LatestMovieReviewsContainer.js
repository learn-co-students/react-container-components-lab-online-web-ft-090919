import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'rbgNFGf1AnUWEhS0qTGY8I2twIBG8GGq';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({reviews: data.results})
        })
    }






    render() {
        return(
            <div className="latest-movie-reviews">
                <h1>Latest Reviews</h1>
                {this.state.reviews.map(review => {
                    return <MovieReviews 
                        title={review.display_title} 
                        key={review.display_title}
                        rating={review.mpaa_rating}
                        headline={review.headline}
                        summary={review.summary_short}
                        />
                })}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer

// https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=rbgNFGf1AnUWEhS0qTGY8I2twIBG8GGq