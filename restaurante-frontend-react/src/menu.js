import React from 'react';
import {Navbar, NavbarBrand, NavItem, NavLink, Nav} from 'reactstrap'

const Menu = () =>
    <Navbar light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <Nav navbar>
            <NavItem>
                <NavLink href="#">Restaurantes</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Pratos</NavLink>
            </NavItem>
        </Nav>
    </Navbar>

export default Menu;

