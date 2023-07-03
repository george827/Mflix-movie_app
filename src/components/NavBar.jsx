import React from 'react'
import { HiSearch } from "react-icons/hi";
import "../style/NavBar.css";
import { useState } from 'react';
import Movies from './Movies';
import { Routes, Route, NavLink } from 'react-router-dom';
import TvShows from './TvShows';
import Trendings from './Trends';
import Pricing from './Pricing';
export const Container = React.createContext()



function NavBar() {
    const [toggle, setToggle] = useState(true);
    const [InputValue, setInputValue] = useState("")
    return (
        <Container.Provider value={{toggle, InputValue}}>
        <>
            <nav className={toggle ? "" : "navBarColor"} >
                <div className="nav-options">
                    <h1 id={toggle ? "" : "heading"}>MYFLIX</h1>
                    <NavLink to="/" style={({isActive}) => { return {color:isActive? "#fff" : "#EE9B00"}}}>
                        <span id={toggle ? "Movies" : "MoviesLight"}>Movies</span>
                    </NavLink>
                    <NavLink to="/tvShows" style={({isActive}) => { return {color:isActive? "#fff" : "#EE9B00"}}}>
                    <span id={toggle ? "Movies" : "MoviesLight"}>Tv Shows</span>
                    </NavLink>
                    <NavLink to="/trendings" style={({isActive}) => { return {color:isActive? "#fff" : "#EE9B00"}}}>
                    <span id={toggle ? "Movies" : "MoviesLight"}>Trendings</span>
                    </NavLink>
                    <NavLink to="/princing" style={({isActive}) => { return {color:isActive? "#fff" : "#EE9B00"}}}>
                    <span id={toggle ? "Movies" : "MoviesLight"}>Pricing</span>
                    </NavLink>
                    
                </div>
                <div className="input-group">
                    <input type="text" 
                    className="search-bar" 
                    placeholder="Search what ever you want" 
                    onChange={(e) => setInputValue(e.target.value)} />
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
        </Container.Provider>
    )
}

export default NavBar
