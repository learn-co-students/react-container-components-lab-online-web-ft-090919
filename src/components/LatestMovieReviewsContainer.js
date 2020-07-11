import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMoviesReviewsContainer extends Component {
    state = {
        reviews: []
    }
    fetchLatestReviews() {
        fetch(URL)
            .then(resp => resp.json())
            .then(json => {
                this.setState({reviews: json.results});
            });
    }

    componentDidMount() {
        this.fetchLatestReviews();
    }
    render() {
        return (
            <div style={{float: 'left'}} className="latest-movie-reviews">
                <h1>Latest Reviews</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        );
    }
}
