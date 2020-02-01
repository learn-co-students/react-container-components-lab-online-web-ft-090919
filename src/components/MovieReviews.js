// Code MovieReviews Here

import React from 'react'


// title: reviewsData.results[0].display_title
// short summary: reviewsData.result[0].short_summary

// below "reviews" should equate to reviewsData.results

const MovieReviews = ({ reviews }) => {

    return (
        <div className="review-list">
            { reviews.map(({ headline, summary_short, display_title }, index ) => 
            <div key={index} className="review" >
                <h3>
                    { headline }
                </h3>
                <p>
                    { display_title } - { summary_short }
                </p>
            </div>
            )}
        </div>
    )
}





export default MovieReviews





// Ex. of one review object:

// this.state.reviews[0]

// {display_title: "Taylor Swift: Miss Americana", mpaa_rating: "", critics_pick: 1, byline: "Wesley Morris", headline: "‘Taylor Swift: Miss Americana’ Review: A Star, Scathingly Alone", …}
// display_title: "Taylor Swift: Miss Americana"
// mpaa_rating: ""
// critics_pick: 1
// byline: "Wesley Morris"
// headline: "‘Taylor Swift: Miss Americana’ Review: A Star, Scathingly Alone"
// summary_short: "Self-critical, grown up and ready, perhaps, to deliver a message beyond the music."
// publication_date: "2020-01-30"
// opening_date: "2020-01-31"
// date_updated: "2020-02-01 17:44:17"
// link:
// type: "article"
// url: "http://www.nytimes.com/2020/01/30/movies/taylor-swift-miss-americana-review.html"
// suggested_link_text: "Read the New York Times Review of Taylor Swift: Miss Americana"
// __proto__: Object
// multimedia:
// type: "mediumThreeByTwo210"
// src: "https://static01.nyt.com/images/2020/01/29/arts/29TAYLOR/29TAYLOR-mediumThreeByTwo210.jpg"
// width: 210
// height: 140
// __proto__: Object
// __proto__: Object




