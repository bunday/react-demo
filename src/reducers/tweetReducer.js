export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TWEETS':
            return action.payload;
            // return [...state, action.payload, action.payload, action.payload, action.payload, action.payload, action.payload, action.payload, action.payload];
        default:
            return state;
    }
}