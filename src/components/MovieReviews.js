import React from 'react';
let MovieReview = ({display_title, byline, summary_short, link}) => {
    return (
        <div className="review" key={display_title}>
            <h1>{display_title}</h1>
            <p>{summary_short}</p>
            <footer>By: {byline}</footer>
            <a href={link.url}>{link.suggested_link_text}</a>
        </div>

    );
}

let MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.map(MovieReview)}
        </div>
    );
}

export default MovieReviews;
