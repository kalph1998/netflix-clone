import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../styles/banner.scss";
const Banner = (props) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, [props.fetchUrl]);

  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.orignal_name || movie?.name || movie?.original_title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">my list</button>
        </div>
        <p className="banner__description">{movie?.overview}</p>
      </div>
      <div className="banner__fadebottom"></div>
    </header>
  );
};
export default Banner;
