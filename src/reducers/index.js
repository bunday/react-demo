import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import notificationReducer from './notificationReducer'
import tweetReducer from './tweetReducer'
import trendReducer from './trendReducer'

export default combineReducers({
    movies: movieReducer,
    notify: notificationReducer,
    tweets: tweetReducer,
    trends: trendReducer
})