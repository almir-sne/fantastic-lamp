import React, {Component} from 'react';

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
