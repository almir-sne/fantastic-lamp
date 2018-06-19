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
        case 'PERSIST_RESTAURANT' :
            return {
                ...state,
                restaurant: action.restaurant
            };
        case 'GET_RESTAURANT' :
            return { 
                ...state,
                id: action.id
            };
        case 'GET_RESTAURANT_SUCCESS' :
            return {
                ...state,
                restaurant: action.restaurant
            };
        case 'DELETE_RESTAURANT_SUCCESS':
            return {
                ...state,
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
            };
        default:
            return state
    }
}