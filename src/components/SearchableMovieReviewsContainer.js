import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'S9h8kfJcfFt1mVP3mM0o2OS6nQUOZJvE';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}`;


export default class SearchableMovieReviewsContainer extends Component{
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  fetchReviews = () => {
    fetch(`${URL}&query=${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then(json => this.setState({
      reviews: json.results
    }))
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.fetchReviews()
  }

  render() {
     return (
       <div className="searchable-movie-reviews">
         <form onSubmit={this.handleSubmit}>
           <label htmlFor="search-input">Search Movie Reviews</label>
           <input
             id="search-input"
             type="text"
             style={{ width: 300 }}
             onChange={this.handleSearchInputChange}
           />
           <button type="submit">Submit</button>
         </form>
         {typeof this.state.reviews === 'object' &&
           this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
         <MovieReviews reviews={this.state.reviews} />
       </div>
     );
   }
 }
