import React, { useEffect } from "react";
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../style/TrailerMovies.css'

const TrailerMovies = ({moviesTitle}) => {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");
  function handleSearch() {
    setVideo(moviesTitle);
	movieTrailer(video).then((res) => {
	setVideoURL(res);
	});
}
useEffect(() => {
  handleSearch();
}, [videoURL]);
  return (
    <>
      <div className="Container"></div>
      <div className="player">
      <ReactPlayer url={videoURL} controls={true}/>
      </div>
    </>
  );
};

export default TrailerMovies;
