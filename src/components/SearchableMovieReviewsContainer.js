import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    submitHandler = (event) => {
        event.preventDefault()
        let searchURL = URL + '&query=' + this.state.searchTerm

        fetch(searchURL)
        .then(resp => resp.json())
        .then(reviewsData => this.setState({ reviews: reviewsData.results })
        )
    }

    // updateText = (event) => {
    //     event.persist()
    //     this.setState({
    //         searchTerm: event.target.value 
    //     })
    //     debugger 
    // }



    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.submitHandler}>
                    <label>Search Reviews:</label>
                    <input type="text" onChange={event => this.setState({searchTerm: event.target.value})} >
                    </input>
                    <button type="submit" value="submit">Submit
                    </button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}


export default SearchableMovieReviewsContainer
