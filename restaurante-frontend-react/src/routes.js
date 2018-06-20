import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './home'
import Meals from "./meals/meals";
import Restaurants from "./restaurants/restaurants";
import CreateMeal from "./meals/createMeals";
import CreateRestaurant from "./restaurants/createRestaurants";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/meals' component={Meals}/>
                <Route exact path='/restaurants' component={Restaurants}/>
                <Route path='/meal/:id?' component={CreateMeal}/>
                <Route path="/restaurant/:id?" component={CreateRestaurant}/>
            </Switch>
        );
    }
}

export default Routes;