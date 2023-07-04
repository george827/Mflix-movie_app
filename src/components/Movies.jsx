import { React, useContext, useEffect, useState } from 'react'
import "../style/movies.css"
import axios from 'axios'
import { AiFillPlayCircle } from "react-icons/ai";
import { Container } from './NavBar';

// "https://api.themoviedb.org/3/movie/550?api_key=0a2b0b0c0d0e0f0a0b0c0d0e0f0a2b0b"
// https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg

function Movies() {
  const [movieData, setMovieData] = useState([])
  const { toggle, InputValue } = useContext(Container)
  const input = InputValue
  const Api = " https://api.themoviedb.org/3/discover/movie"
  const img = "https://image.tmdb.org/t/p/w500/"
  const noImg = "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
  const [trailer, setTrailer] = useState(true)

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "09543633934773fe0f7b19a738612ce3",
        query: input,
      }
    })
    const res = data.data.results
    setMovieData(res)
  }
  useEffect(() => {
    MovieCall()
  }, [input])

  console.log(movieData)

  return (
    <>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {movieData.map((movie) => {
            return (
              <>
                <div id={ trailer ? "container" : "NoContainer"}>
                  < AiFillPlayCircle id="playIcon" color='#fff' fontSize={40} />
                  <img src={movie.poster_path ? `${img}${movie.poster_path}` : noImg} alt="" />
                  <h3 id={movie.title.lenght > 28 ? "smaller-Text" : "" } className={toggle ? "DarkTheme" : "LightThemeClose" }>{movie.title}</h3>
                </div>
              </>
            )
          })
          }
        </div>
      </div>
    </>
  )
}

export default Movies;
