import React from "react";
import { HiSearch } from "react-icons/hi";
import "../style/Navbar.css";
import { useState } from "react";
import Movies from "./Movies";
import { Routes, Route, NavLink } from "react-router-dom";
import TvShows from "./TvShows";
import Trendings from "./Trends";
import Pricing from "./Pricing";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
export const Container = React.createContext();
import { AiOutlineAlignLeft } from "react-icons/ai";

function NavBar() {
  const [toggle, setToggle] = useState(true);
  const [InputValue, setInputValue] = useState("");
  const [dropdown, setDropdown] = useState(false);
  return (
    <Container.Provider value={{ toggle, InputValue }}>
      <>
        <nav className={toggle ? "" : "navBarColor"} id="nav">
          <div className="main-navBar">
            <div className="nav-options">
              <h1 id={toggle ? "" : "heading"}>MYFLIX</h1>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return { color: isActive && toggle ? "#fff" : "#EE9B00" };
                }}
              >
                <span id={toggle ? "Movies" : "MoviesLight"}>Movies</span>
              </NavLink>
              <NavLink
                to="/tvShows"
                style={({ isActive }) => {
                  return { color: isActive ? "#fff" : "#EE9B00" };
                }}
              >
                <span id={toggle ? "Movies" : "MoviesLight"}>Tv Shows</span>
              </NavLink>
              <NavLink
                to="/trendings"
                style={({ isActive }) => {
                  return { color: isActive ? "#fff" : "#EE9B00" };
                }}
              >
                <span id={toggle ? "Movies" : "MoviesLight"}>Trendings</span>
              </NavLink>
              <NavLink
                to="/princing"
                style={({ isActive }) => {
                  return { color: isActive ? "#fff" : "#EE9B00" };
                }}
              >
                <span id={toggle ? "Movies" : "MoviesLight"}>Pricing</span>
              </NavLink>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="search-bar"
                placeholder="Search what ever you want"
                onChange={(e) => setInputValue(e.target.value)}
              />
              <HiSearch fontSize={21} color="green" id="search" />

              <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                {/* <div id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}> */}

                {/* </div> */}
                <img src={toggle ? moon : sun} alt="dark-theme" width="35px" />
              </div>
            </div>
          </div>

          <div className="min-nav">
            <AiOutlineAlignLeft
              fontSize={35}
              color="#fff"
              onClick={() => setDropdown(!dropdown)}
              className="outline"
            />
          </div>
        </nav>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/tvShows" element={<TvShows />} />
            <Route path="/trendings" element={<Trendings />} />
            <Route path="/princing" element={<Pricing />} />
          </Routes>
        </div>
      </>
    </Container.Provider>
  );
}

export default NavBar;
