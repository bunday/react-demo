export default (state = [], action) => {
    switch (action.type) {
        case 'NOTIFICATTION_STATUS':
            return action.payload;
        default:
            return state;
    }
}