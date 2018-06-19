export default (state = {}, action) => {
    switch (action.type) {
        case 'LIST_MEALS_SUCCESS':
            return {
                ...state,
                meals: action.meals
            };
        case 'LIST_MEALS':
        default:
            return state
    }
}