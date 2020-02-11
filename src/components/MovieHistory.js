import React, { Component, useState, useEffect } from "react";
import Header from "./Header";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import Notification from "./Notification";
import axios from "axios";

const MovieHistory = () => {
  

  const [movies, setMovies] = useState([]);
  const search = '';

  useEffect(() => {
    (async search => {
      const url = `${API_URL}search/movie?api_key=${API_KEY}&query=${search}`;
      const resp = await axios.get(url, header);
      setMovies(resp.data);
    })(search);
  }, [search, header]);

  

  return (
    <div>
      <Header title="Check Out Movies" />
      <main className="px-12 py-5 ">
        <div className="py-4">
          <h2 className="text-blue-500 text-2xl">Check Out Movies </h2>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <SearchBar/>
            {/* {this.state.notify ? (
              <Notification
                content={this.state.notificationContent}
                style={this.state.notifyStyle}
              />
            ) : null}
            <div className="flex flex-wrap mt-3">
              {this.state.movies.length > 0
                ? this.state.movies.map(movie => {
                    if (movie && movie.poster_path) {
                      return <MovieCard key={movie.id} movie={movie} />;
                    }
                  })
                : null}
            </div> */}
          </div>
          {/* <div className="w-full lg:w-1/4">
                        
                     </div> */}
        </div>
      </main>
    </div>
  );
};
// class MovieHistory extends Component {

//     API_URL = 'https://api.themoviedb.org/3/';
//     API_KEY = 'b5fe6f43e3714159d2209d0fe8c3a695';
//     header = {
//         headers: new Headers({
//             'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWZlNmY0M2UzNzE0MTU5ZDIyMDlkMGZlOGMzYTY5NSIsInN1YiI6IjU5MGIwOTc5OTI1MTQxNGZhODAxMzE2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldVdrLz-iWpzmEgMvf_7IwT9pdfh14Pdqr_r2TGuMzg',
//             'Content-Type':'application/json;charset=utf-8'
//         })
//     }

//     state = {
//         movies : [],
//         search : '',
//         notificationContent: 'Loading, Please Wait ...',
//         notify: true,
//         notifyStyle: 'bg-teal-500'
//     }
//     handleChange = (event) => {
//         const {name,value} = event.target
//         this.setState({ [name]: value})
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         const url = `${this.API_URL}search/movie?api_key=${this.API_KEY}&query=${this.state.search}`;
//         this.fetchMovies(url)
//     }
//     componentDidMount() {
//         const year = new Date().getFullYear()
//         const url = `${this.API_URL}discover/movie?sort_by=popularity.desc&year=${year}?api_key=${this.API_KEY}`;
//         this.fetchMovies(url)
//     }
//     fetchMovies(url) {
//         this.setState({
//             movies: [],
//             notificationContent: 'Loading, Please Wait ...',
//             notify: true,
//             notifyStyle: 'bg-teal-500'
//         })
//         fetch(
//             url,
//             this.header)
//         .then(res=> res.json())
//         .then(response => {
//             if (response.results.length > 0) {
//                 response.results.map( elem => elem.vote_average *=  10)
//                 this.setState({
//                     movies: response.results,
//                     notify: false,
//                     notificationContent: '',
//                     notifyStyle: 'bg-red-500'
//                 })
//             } else {
//                 this.setState((prevState) => {
//                     return {
//                         movies: response.results,
//                         notify: true,
//                         notificationContent: `No Movies Found with title ${prevState.search}`,
//                         notifyStyle: 'bg-red-500'
//                     }
//                 })
//             }
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <Header title='Check Out Movies' />
//                 <main className="px-12 py-5 ">
//                 <div className="py-4">
//                     <h2 className="text-blue-500 text-2xl">Check Out Movies </h2>
//                 </div>
//                 <div className="flex flex-wrap">
//                     <div className="w-full">
//                         <SearchBar handleChange={this.handleChange} state={this.state} handleSubmit={this.handleSubmit}/>
//                         {

//                             this.state.notify ?
//                             <Notification content={this.state.notificationContent} style={this.state.notifyStyle}/>
//                             : null
//                         }
//                         <div className="flex flex-wrap mt-3">
//                             {
//                                 this.state.movies.length > 0 ?
//                                 this.state.movies.map(movie => {
//                                     if (movie && movie.poster_path) {
//                                         return <MovieCard key={movie.id} movie={movie}/>
//                                     }
//                                 }) : null
//                             }
//                         </div>
//                     </div>
//                     {/* <div className="w-full lg:w-1/4">

//                     </div> */}
//                 </div>

//                 </main>
//             </div>

//         )
//     }
// }

export default MovieHistory;
