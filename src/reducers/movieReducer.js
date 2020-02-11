export default (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_MOVIES':
            return action.payload.results;
        case 'FETCH_MOVIES':
            return action.payload.results;
        default:
            return state;
    }
}