export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TRENDS':
            return action.payload;
        default:
            return state;
    }
}