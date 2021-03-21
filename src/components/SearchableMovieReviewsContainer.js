import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


export class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL)
        .then(r => r.json())
        .then(result => this.setState({ reviews:result.results}))
    }

    render() {
        return (
            <div>
                <form onSubmit = {(e) => this.handleSubmit(e)}>
                    <input 
                        onChange = {(e) => this.handleChange(e)}
                        type='text' 
                        name='search' 
                        placeholder='search keyword'
                    />
                    <button>search</button>
                    <MovieReviews reviews={this.state.reviews} />
                </form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
