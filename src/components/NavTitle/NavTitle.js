import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavbarBrand } from 'reactstrap';
import './NavTitle.css';

function NavTitle() {
    return (
        <NavbarBrand>
            <Link smooth to="#home-section">THOMAS FALLON</Link>
        </NavbarBrand>
    )
}

export default NavTitle;


// For React Router Hash Link help I used the following resource- https://github.com/rafgraph/react-router-hash-link