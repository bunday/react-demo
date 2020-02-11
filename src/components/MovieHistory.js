import React, { Component } from "react";
import Header from "./Header";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import Notification from "./Notification";
import { connect } from 'react-redux';
import { fetchMovies, searchMovies } from '../actions';

class MovieHistory extends Component {

    API_URL = 'https://api.themoviedb.org/3/';
    API_KEY = 'b5fe6f43e3714159d2209d0fe8c3a695';
    header = {
        headers: new Headers({
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWZlNmY0M2UzNzE0MTU5ZDIyMDlkMGZlOGMzYTY5NSIsInN1YiI6IjU5MGIwOTc5OTI1MTQxNGZhODAxMzE2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldVdrLz-iWpzmEgMvf_7IwT9pdfh14Pdqr_r2TGuMzg',
            'Content-Type':'application/json;charset=utf-8'
        })
    }
    handleSubmit = (searchTerm) => {
        this.props.searchMovies(searchTerm);
    }
    componentDidMount() {
       this.props.fetchMovies()
    }

    render() {
        return (
            <div>
                <Header title='Check Out Movies' />
                <main className="px-12 py-5 ">
                <div className="py-4">
                    <h2 className="text-blue-500 text-2xl">Check Out Movies </h2>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <SearchBar handleSubmit={this.handleSubmit}/>
                        {

                            this.props.notify ?
                            <Notification content={this.props.notify.message} style={this.props.notify.style}/>
                            : null
                        }
                        <div className="flex flex-wrap mt-3">
                            {
                                this.props.movies.length > 0 ?
                                this.props.movies.map(movie => {
                                    if (movie && movie.poster_path) {
                                        return <MovieCard key={movie.id} movie={movie}/>
                                    }
                                }) : null
                            }
                        </div>
                    </div>
                    {/* <div className="w-full lg:w-1/4">

                    </div> */}
                </div>

                </main>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return { movies: state.movies, notify: state.notify }
}
export default connect(mapStateToProps, { fetchMovies, searchMovies})(MovieHistory);
