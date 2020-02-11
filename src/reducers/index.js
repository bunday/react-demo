import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import notificationReducer from './notificationReducer'

export default combineReducers({
    movies: movieReducer,
    notify: notificationReducer
})