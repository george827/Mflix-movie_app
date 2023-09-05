import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import { Container } from './NavBar';
import "../style/movies.css"
import TrailerTv from '../Trailers/TrailerTv';

function TvShows() {
  const { toggle, InputValue } = useContext(Container)
  const [showData, setShowData] = useState([])
  const img = "https://image.tmdb.org/t/p/w500/";
  const noImg = "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
  const [trailer, setTrailer] = useState(true)
  const [title, setTitle] = useState("");
  const input = InputValue;
  const shown = input ? "search" : "discover"
  const Api = `https://api.themoviedb.org/3/${shown}/tv`;

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "09543633934773fe0f7b19a738612ce3",
        query: input,
      }
    })
    const results = data.data.results;
    setShowData(results)
  }

  useEffect(() => {
    setTimeout(() => {
      TvShows()
    }, 100)
  }, [input])
  console.log(showData);

  const TvShowTitle = (shows) => {
    setTitle(shows.name)
    setTrailer(!trailer)
  }
  return (
    <>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {showData.map((shows) => {
            return (
              <div key={shows.id}>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle color="#fff" 
                  fontSize={40} id={trailer ? "playIcon" : "hide"} 
                  onClick={() => TvShowTitle(shows)} />
                  <img src={shows.poster_path ? `${img}${shows.poster_path}` : noImg} alt="" 
                  onClick={() => TvShowTitle(shows)} />
                  <h3 id={shows.name.lenght > 28 ? "smaller-Text" : ""} 
                  className={toggle ? "mainColor" : "secondaryColor"}>{shows.name}</h3>
                </div>
              </div>
            )
          })}
          {trailer ? console.log : <TrailerTv tvShowTitle={title} />}
          <AiOutlineClose 
          id={trailer ? "Nothing" : "Exit1"} 
          className={toggle ? "DarkTheme" : "LightThemeClose"} 
          onClick={() => setTrailer(true)}
          fontSize={55}
          color='#fff'
          cursor={"pointer"}
          />
        </div>
      </div>
    </>
  )
}

export default TvShows;
