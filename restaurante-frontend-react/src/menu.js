import React from 'react';
import {Navbar, NavbarBrand, NavItem, Nav, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'

const Menu = () =>
    <Navbar light expand="md">
        <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
        <Nav navbar>
            <NavItem>
                <NavLink tag={Link} to="/restaurants">Restaurantes</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/meals">Pratos</NavLink>
            </NavItem>
        </Nav>
    </Navbar>

export default Menu;

