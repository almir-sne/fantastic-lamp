import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './home'
import Meals from "./meals/meals";
import Restaurants from "./restaurants/restaurants";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/meals' component={Meals}/>
                <Route path='/restaurants' component={Restaurants}/>
            </Switch>
        );
    }
}

export default Routes;