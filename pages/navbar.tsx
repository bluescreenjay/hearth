import Logo from "./components/Navbar/logo";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import profile from './profileSettings';

const Navbar = () => {
    return (
        //<Logo />
        <ul className="navbar">
        <li className="navbox"><a className="navelem-no-hover"><Logo /></a></li>
        <li className="navbox"><a className="navelem-no-hover">HEARTH<></></a></li>
        <li className="navbox"><a className="navelem" href="index.html">meet us</a></li>
        <li className="navbox"><a className="navelem" href="projects.html">explore hearths</a></li>
        <li className="navbox"><a className="navelem" href="travel.html">travel</a></li>
        <li className="navbox"><a className="navelem" href="coding.html">coding</a></li>
        <li className="navbox"><a className="navelem" href="music.html">booked listings</a></li>
        <li className="navbox"><a className="navelem" href="media.html">saved listings</a></li>
        <li className="navbox"><a className="navelem" href="profileSettings.tsx">profile</a></li>
      </ul>
    );
}

export default Navbar;  