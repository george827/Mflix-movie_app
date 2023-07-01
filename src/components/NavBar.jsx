import React from 'react'
import { HiSearch } from "react-icons/hi";
import "../style/NavBar.css";
import { useState } from 'react';


function NavBar() {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            <nav className={toggle ? "" : "navBarColor"} >
                <div className="nav-options">
                    <h1 id={toggle ? "" : "heading"}>MYFLIX</h1>
                    <span id={toggle ? "Movies" : "MoviesLight"}>Movies</span>
                    <span id={toggle ? "Movies" : "MoviesLight"}>Tv Shows</span>
                    <span id={toggle ? "Movies" : "MoviesLight"}>Trendings</span>
                    <span id={toggle ? "Movies" : "MoviesLight"}>Pricing</span>
                </div>
                <div className="input-group">
                    <input type="text" className="search-bar" placeholder="Search what ever you want" />
                    < HiSearch fontSize={21} color="green" id='search'/>

                    <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                        <div id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar
