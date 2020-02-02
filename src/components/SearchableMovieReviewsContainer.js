import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.fetchMovieReviews()
  }

  fetchMovieReviews = () => {
    fetch(`${URL}&searchTerm=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(data => this.setState({reviews: data.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Reviews:
            <input onChange={this.handleChange} name="searchTerm" value={this.state.searchTerm} />
          </label>
        </form>
      <div>
        <MovieReviews reviews={this.state.reviews} />
      </div>
      </div>
    )
  }
}
