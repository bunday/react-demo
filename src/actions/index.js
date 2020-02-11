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
const headers = {
  Authorization:
    "Bearer AAAAAAAAAAAAAAAAAAAAABWwAwEAAAAAwpR5bj91XGI6HnNczREqg4isd5M%3DEZON7bu5E3dsGhDowTuta7itBPCwS2gpe0r5hHpZyiLJTluu6t",
  "Content-Type": "application/json;charset=utf-8"
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
      notifyDispatch(
        err.message + ". Please enter a key word to search",
        "bg-red-500",
        dispatch
      );
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

export const fetchTweets = data => async dispatch => {
  // dispatch notification to search
  notifyDispatch("Loading, Please Wait ...", "bg-teal-500", dispatch);

  const dto = {
    fromDate: `${data.startDate.replace(/-/g, "")}0000`,
    toDate: `${data.endDate.replace(/-/g, "")}0000`,
    query: `from:${data.username} lang:en`,
    maxResults: "12"
  };
  // fetch tweets
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://api.twitter.com/1.1/tweets/search/fullarchive/Dev.json";
  await axios.post(proxyurl + url, dto, { headers }).then(
    res => {
      console.log(res);
      dispatch({
        type: "FETCH_TWEETS",
        payload: res.data
      });
      notifyDispatch(
        "Tweet Fetched.",
        "bg-green-500",
        dispatch
      );
    },
    err => {
        notifyDispatch(
            err.message + ". Please enter a key word to search",
            "bg-red-500",
            dispatch
          );
    }
  );
//   const data = {
//     created_at: "Wed Aug 28 22:32:24 +0000 2019",
//     id: 1166840987081170944,
//     id_str: "1166840987081170944",
//     text: "DOCTOR is trending tonight, the VN version sha courtesy @_T_babyy",
//     source:
//       '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
//     user: {
//       id: 1032309123025719297,
//       name: "Bundayy Olayinka",
//       screen_name: "BundayyO",
//       location: "Lagos, Nigeria",
//       followers_count: 2564,
//       friends_count: 2915,
//       listed_count: 3,
//       favourites_count: 18428,
//       statuses_count: 41027,
//       profile_image_url:
//         "http://pbs.twimg.com/profile_images/1213511879047417859/smzgMKt3_normal.jpg",
//       profile_image_url_https:
//         "https://pbs.twimg.com/profile_images/1213511879047417859/smzgMKt3_normal.jpg",
//       profile_banner_url:
//         "https://pbs.twimg.com/profile_banners/1032309123025719297/1570536968"
//     },
//     quote_count: 0,
//     reply_count: 1,
//     retweet_count: 0,
//     favorite_count: 2,
//     entities: {
//       hashtags: [],
//       urls: [],
//       user_mentions: [
//         {
//           screen_name: "_T_babyy",
//           name: "blackkie 🌚",
//           id: 1102117924641353728,
//           id_str: "1102117924641353728",
//           indices: [56, 65]
//         }
//       ],
//       symbols: []
//     },
//     favorited: false,
//     retweeted: false,
//     filter_level: "low",
//     lang: "en",
//     matching_rules: [
//       {
//         tag: null
//       }
//     ]
//   };
//   dispatch({
//     type: "FETCH_TWEETS",
//     payload: data
//   });
};

export const notifyPortals = (message, style) => async dispatch => {
  notifyDispatch(message, style, dispatch);
};
