// Code MovieReviews Here
import React from 'react'


export default function MovieReviews({reviews}) {
    
    return (
        <div className='review-list'>
            {reviews.map(review => renderReviews(review))}
        </div>
    )
}

const renderReviews = ({display_title, headline, multimedia, publication_date}) => {
    return (
        <div className='review'>
            <h1>{display_title}</h1>
            <h3>{headline}</h3>
            <img src={multimedia.src} />
            <h6>{publication_date}</h6>
        </div>
    )
}