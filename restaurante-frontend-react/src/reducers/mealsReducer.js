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
        case 'DELETE_MEAL_SUCCESS':
            return {
                ...state,
                meals: state.meals.filter(meal => meal.id !== action.id)
            };
        default:
            return state
    }
}