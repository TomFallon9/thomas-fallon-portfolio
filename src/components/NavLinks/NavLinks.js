import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavItem, NavLink } from 'reactstrap';
import './NavLinks.css';

function NavLinks() {
    return (
        <>
            <NavItem>
                <Link className="nav-link hvr-underline-from-center" smooth to="#about-section">About</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link hvr-underline-from-center" smooth to="#portfolio-section">Portfolio</Link>
            </NavItem>
            <NavItem>
                <NavLink className="hvr-underline-from-center" href="https://docs.google.com/document/d/1PsmURmY97-W9g-5HzwAX-vm3Y3h_ytWNPB3Rhcm-AIw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</NavLink>
            </NavItem>
            <NavItem>
                <Link className="nav-link hvr-underline-from-center" smooth to="#contact-section">Contact</Link>
            </NavItem>
        </>
    );
}

export default NavLinks;

// Resource
// React Router Hash Link - https://github.com/rafgraph/react-router-hash-link