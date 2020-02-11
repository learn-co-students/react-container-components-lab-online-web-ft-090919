import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ATlZpWmglYzFmuNmDTbj0DaGtdsRTvwo';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: "",
        reviews: []
    }

    handleInputChange = event => {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
    }

    renderSearchResults = () => {
        if (this.state.reviews.length > 0) {
            return (
                <div>
                    <h2>Search Results:</h2>
                    < MovieReviews reviews={this.state.reviews} />
                </div>
            )
        }
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleInputChange}/>
                    <button type='submit'>Search</button>
                </form>
                    {this.renderSearchResults()}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer