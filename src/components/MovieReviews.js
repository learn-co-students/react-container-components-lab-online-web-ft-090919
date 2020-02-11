import React from 'react'

const Review = ({
    // use destructuring to assign variables 
    headline,
    byline,
    link,
    summary_short
}) => {
    return (
        <li key={headline} className="review">
        <header>
            <a className="review-link" href={link.url}>{headline}</a>
            <br/>
            <span className="author">{byline}</span>
        </header>
        <blockquote>{summary_short}</blockquote>
        </li>
    )
}

const MovieReviews = ({reviews}) => <ul className='review-list'>{reviews.map(Review)}</ul>;


MovieReviews.defaultProps = { reviews: []};

export default MovieReviews;