import { combineReducers } from "redux";
import restaurants from './restaurantsReducer'
import meals from './mealsReducer'

export default combineReducers({restaurantsReducer: restaurants, mealsReducer: meals});