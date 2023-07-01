import React from 'react'
import { HiSearch } from "react-icons/hi";
import "../style/NavBar.css";
import { useState } from 'react';
import Movies from './Movies';
import { Routes, Route, NavLink } from 'react-router-dom';
import TvShows from './TvShows';
import Trendings from './Trends';
import Pricing from './Pricing';


function NavBar() {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            <nav className={toggle ? "" : "navBarColor"} >
                <div className="nav-options">
                    <h1 id={toggle ? "" : "heading"}>MYFLIX</h1>
                    <NavLink to="/">
                        <span id={toggle ? "Movies" : "MoviesLight"}>Movies</span>
                    </NavLink>
                    <NavLink to="/tvShows">
                    <span id={toggle ? "Movies" : "MoviesLight"}>Tv Shows</span>
                    </NavLink>
                    <NavLink to="/trendings">
                    <span id={toggle ? "Movies" : "MoviesLight"}>Trendings</span>
                    </NavLink>
                    <NavLink to="/princing">
                    <span id={toggle ? "Movies" : "MoviesLight"}>Pricing</span>
                    </NavLink>
                    
                </div>
                <div className="input-group">
                    <input type="text" className="search-bar" placeholder="Search what ever you want" />
                    < HiSearch fontSize={21} color="green" id='search' />

                    <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                        <div id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}>

                        </div>
                    </div>
                </div>
            </nav>
            <Routes >
                <Route path="/" element={< Movies />} />
                <Route path="/tvShows" element={< TvShows />} />
                <Route path="/trendings" element={< Trendings />} />
                <Route path="/princing" element={< Pricing />} />
            </Routes>

        </>
    )
}

export default NavBar
