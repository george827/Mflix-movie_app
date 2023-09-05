import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react'
import { Container } from './NavBar';
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import "../style/movies.css"
 

function Trends() {
  const Api = `https://api.themoviedb.org/3`
  const { toggle } = useContext(Container)
  const TrendsShown = "/trending/all/week";
  const [TrendsArray, setTrendsArray] = useState([])
  const [trendsTitle, setTrendsTitle] = useState('')
  const [trailer, setTrailer] = useState(true)
  const img = "https://image.tmdb.org/t/p/w500/"
  const noImg = "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"

  const Trends = async () => {
    const data = await axios.get(`${Api}${TrendsShown}`, {
      params: {
        api_key: "09543633934773fe0f7b19a738612ce3",
      }
    })
    const res = data.data.results;
    setTrendsArray(res)
  }

  useEffect(() => {
    Trends()
  }, [])

  const TrendsTitle = (trend) => {
    setTrendsTitle(trend.title)
    setTrailer(!trailer)
  }

  return (
    <>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {TrendsArray.map((trend) => {
            return (
              <>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle color="#fff"
                    fontSize={40} id={trailer ? "playIcon" : "hide"}
                    onClick={() => TrendsTitle(trend)} />
                  <img src={trend.poster_path ? `${img}${trend.poster_path}` : noImg} alt={trend.title} onClick={() => TrendsTitle(trend)} />
                <h3
                id="smaller-Text"
                className={toggle ? "DarkTheme" : "LightThemeClose"}
                >{trend.title}</h3>
                </div>
                
              </>
            )
          }
          )}
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

export default Trends
