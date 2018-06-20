export default (state = {}, action) => {
    switch (action.type) {
        case 'LIST_MEALS_SUCCESS':
            return {
                ...state,
                meals: action.meals
            };
        case 'GET_MEALS_SUCCESS' :
            return {
                ...state,
                meal: action.meal
            };
        default:
            return state
    }
}