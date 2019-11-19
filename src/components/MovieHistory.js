import React, { Component } from 'react'
import Header from './Header'
import MovieCard from './MovieCard';

class MovieHistory extends Component {

    API_URL = 'https://api.themoviedb.org/3/';
    API_KEY = 'b5fe6f43e3714159d2209d0fe8c3a695';
    header = {
        headers: new Headers({
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWZlNmY0M2UzNzE0MTU5ZDIyMDlkMGZlOGMzYTY5NSIsInN1YiI6IjU5MGIwOTc5OTI1MTQxNGZhODAxMzE2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldVdrLz-iWpzmEgMvf_7IwT9pdfh14Pdqr_r2TGuMzg',
            'Content-Type':'application/json;charset=utf-8'
        })
    }
    state = {
        movies : []
    }
    componentDidMount() {
        fetch(
            `${this.API_URL}discover/movie?sort_by=vote_count.desc?api_key=${this.API_KEY}`,
            this.header)
        .then(res=> res.json())
        .then(response => {
            this.setState({ movies: response.results})
        })
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
                        <div>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="search..."/>
                        </div>
                        <div className="flex justify-center mt-2">
                            <button className="bg-blue-500 px-4 py-2 rounded">Go 💥 </button>
                        </div>
                        <div className="flex flex-wrap mt-3">
                            {
                                this.state.movies.map(movie => {
                                    if (movie && movie.poster_path) {
                                        movie.popularity = movie.popularity * 10;
                                        movie.vote_average = movie.vote_average * 10;
                                        return <MovieCard key={movie.id} movie={movie}/>
                                    }
                                })
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

export default MovieHistory;