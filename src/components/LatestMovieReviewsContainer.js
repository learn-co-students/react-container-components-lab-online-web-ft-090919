import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

  state = {
    movieReviewData: []
  }

  componentDidMount(){
    const fetchData = async () => {
      try{
        let res = await fetch(URL)
        if(!res.ok){throw res}
        let data = await res.json()
        this.handleData(data)
      }catch(error){
        console.log(error)
      }
    }
    fetchData()
  }

  handleData = (data) => {
    console.log(data)
    this.setState({
      movieReviewData: data.results
    })
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews movieReviewData={this.state.movieReviewData}/>
      </div>
      
    )
  }
}
