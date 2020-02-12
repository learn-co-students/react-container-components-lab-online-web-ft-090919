import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    constructor(props){
        super();
        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    handleSearch = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let searchTerm = this.state.searchTerm
        fetch(URL + '&query=' + searchTerm.replace(' ', '+'))
        .then(resp => resp.json())
        .then(movieData => {
            this.setState({
                reviews: movieData.results
            })
        })
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit = {event => this.handleSubmit(event)}>
                    <input type='text' valule={this.state.searchTerm} onChange={this.handleSearch} />
                    <input type="submit" value='Search' />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}
