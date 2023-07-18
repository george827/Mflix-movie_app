import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from './NavBar';
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import "../style/movies.css"

function Trends() {
  const Api = `https://api.themoviedb.org/3`
  const { toggle } = useContext(Container)
  const TrendsShown = "/trending/all/week";
  const [TrendsArray, setTrendsArray] = useState([])
  const [trailer, setTrailer] = useState(true)
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

  console.log(TrendsArray);

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
                    onClick={() => TvShowTitle(shows)} />
                  <img src={shows.poster_path ? `${img}${shows.poster_path}` : noImg} alt=""
                    onClick={() => TvShowTitle(shows)}
                  />
                </div>
                <img src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`} alt={trend.title} />
                <h3>{trend.title}</h3>
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
