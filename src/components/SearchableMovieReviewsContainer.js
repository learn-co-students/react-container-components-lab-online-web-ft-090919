import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

  state = {
    movieReviewData: [],
    searchInput: ""
  }

  
   fetchData = async () => {
      try{
        let res = await fetch(URL + `&query=${this.state.searchInput}`)
        if(!res.ok){throw res}
        let data = await res.json()
        this.handleData(data)
      }catch(error){
        console.log(error)
      }
    }
  

  handleData = (data) => {
    console.log(data)
    this.setState({
      movieReviewData: data.results
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
          {this.generateSearchInput()}
        <MovieReviews movieReviewData={this.state.movieReviewData}/>
      </div>
      
    )
  }

  generateSearchInput = () => {
    return (
      <div className="search-input">
        <input className="searchInput" value={this.state.searchInput} onChange={event => this.handleInputChange(event)} />
        <input type="submit"className="searchSubmit" onClick={event => this.handleSubmit(event)}/>
      </div>  
    )
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.className]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchData()
  }
  
}
