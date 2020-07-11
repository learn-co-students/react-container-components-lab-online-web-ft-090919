import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    fetchMatchedReviews() {
        fetch(URL + '&query=' + this.state.searchTerm)
            .then(resp => resp.json())
            .then(json => {
                this.setState({reviews: json.results});
            });
    }


    handleChange = event => {
        this.setState({searchTerm: event.target.value});
    };

    onSubmit = event => {
        event.preventDefault();
        this.fetchMatchedReviews();
    }

    render() {
       return (
           <div style={{float: 'right'}} className="searchable-movie-reviews">
                <h1>Searchable Reviews</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.query} onChange={this.handleChange}/>
                    <input type="submit" value="get reviews"/>
               </form>
                <MovieReviews reviews={this.state.reviews}/>
           </div>
       );
    }

}
