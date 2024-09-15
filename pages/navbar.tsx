import Logo from "./components/Navbar/logo";
import React from 'react';
import profile from './profileSettings';

const Navbar = () => {
    return (
        //<Logo /> <li className="navbox"><a className="navelem-no-hover"><Logo /></a></li>
        <ul className="navbar">
        <li className="navbox"><a className="navelem-no-hover">HEARTH<></></a></li>
        <li className="navbox"><a className="navelem" href="aboutus">about us</a></li>
        <li className="navbox"><a className="navelem" href="explore">explore hearths</a></li>
        <li className="navbox"><a className="navelem" href="houseEntry">list a hearth</a></li>
        <li className="navbox"><a className="navelem" href="profileSettings">profile</a></li>
      </ul>
    );
}

export default Navbar;  