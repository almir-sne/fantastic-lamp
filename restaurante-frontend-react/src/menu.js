import React from 'react';
import {Link} from 'react-router-dom'

const Menu = () =>
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li>
                    <Link className="navbar-brand" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/restaurants">
                        Restaurantes
                    </Link>
                </li>
                <li>
                    <Link to="/meals">
                        Pratos
                    </Link>
                </li>
            </ul>
        </div>
    </nav>

export default Menu;

