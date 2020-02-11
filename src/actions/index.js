import axios from 'axios';

const API_URL = "https://api.themoviedb.org/3/";
  const API_KEY = "b5fe6f43e3714159d2209d0fe8c3a695";
  const header = {
    headers: new Headers({
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWZlNmY0M2UzNzE0MTU5ZDIyMDlkMGZlOGMzYTY5NSIsInN1YiI6IjU5MGIwOTc5OTI1MTQxNGZhODAxMzE2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldVdrLz-iWpzmEgMvf_7IwT9pdfh14Pdqr_r2TGuMzg",
      "Content-Type": "application/json;charset=utf-8"
    })
};

export const fetchMovies = (search) => async dispatch => {
    const url = `${API_URL}search/movie?api_key=${API_KEY}&query=${search}`;
    const response = await axios.get(url, header);

    dispatch({
        type: "SEARCH_MOVIES",
        payload: response.data
    });
};