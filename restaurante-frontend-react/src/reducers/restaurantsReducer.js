export default (state = {}, action) => {
    switch (action.type) {
        case 'LIST_RESTAURANTS':
            console.log('test')
            return {
                ...state
            };
        case 'LIST_RESTAURANTS_SUCCESS' :
            return {
                ...state,
                ...action
            };
        default:
            return state
    }
}