import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "b5fe6f43e3714159d2209d0fe8c3a695";
const header = {
  headers: new Headers({
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWZlNmY0M2UzNzE0MTU5ZDIyMDlkMGZlOGMzYTY5NSIsInN1YiI6IjU5MGIwOTc5OTI1MTQxNGZhODAxMzE2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldVdrLz-iWpzmEgMvf_7IwT9pdfh14Pdqr_r2TGuMzg",
    "Content-Type": "application/json;charset=utf-8"
  })
};

export const searchMovies = search => async dispatch => {
  if (search === "") {
    // dispatch notification to notify no content
    notifyDispatch(`Please provide a search query`, "bg-red-500", dispatch);
    return;
  }
  // dispatch notification to search
  notifyDispatch("Loading, Please Wait ...", "bg-teal-500", dispatch);

  const url = `${API_URL}search/movie?api_key=${API_KEY}&query=${search}`;
  const response = await axios.get(url, header);

  dispatch({
    type: "SEARCH_MOVIES",
    payload: response.data
  });

  if (response.data.results.length < 1) {
    // dispatch notification to notify no content
    notifyDispatch(`No Movie with keyword ${search}`, "bg-red-500", dispatch);
  } else {
    // dispatch notification to notify success
    notifyDispatch("Movies Fetched", "bg-green-500", dispatch);
  }
};

export const fetchMovies = () => async dispatch => {
  // dispatch notification to search
  notifyDispatch("Loading, Please Wait ...", "bg-teal-500", dispatch);

  // fetch movie
  const year = new Date().getFullYear();
  const url = `${API_URL}discover/movie?api_key=${API_KEY}?sort_by=popularity.desc&year=${year}`;
  await axios.get(url, header).then(
    res => {
      dispatch({
        type: "FETCH_MOVIES",
        payload: res.data
      });
    },
    err => {
      notifyDispatch(err.message+". Please enter a key word to search", "bg-red-500", dispatch);
    }
  );
};

const notifyDispatch = (message, style, dispatch) => {
  const note = { message, style };
  dispatch({
    type: "NOTIFICATTION_STATUS",
    payload: note
  });
};
