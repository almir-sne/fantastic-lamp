export default (state = {}, action) => {
    switch (action.type) {
        case 'LIST_RESTAURANTS':
            return {
                ...state
            };
        case 'LIST_RESTAURANTS_SUCCESS' :
            return {
                ...state,
                restaurants: action.restaurants
            };
        default:
            return state
    }
}