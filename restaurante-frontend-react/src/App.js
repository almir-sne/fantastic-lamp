import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Menu from './menu'
import Routes from "./routes";


class App extends Component {
    render() {
        return (
            <div className="container">
                <Menu/>
                <Routes/>
            </div>
        );
    }
}

export default App;
