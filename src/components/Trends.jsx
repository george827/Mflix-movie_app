import axios from 'axios';
import React, {useEffect, useState} from 'react'

function Trends() {
  const Api = `https://api.themoviedb.org/3`
  const TrendsShown =  "/trending/all/week";
  const [TrendsArray, setTrendsArray] = useState([])
  const Trends = async() => {
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
    <div>
      <h1>trends</h1>
    </div>
  )
}

export default Trends
