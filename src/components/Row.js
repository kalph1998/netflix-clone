import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../styles/row.scss";
const base_url = "https://image.tmdb.org/t/p/w500/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [props.fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{props.title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={`${base_url}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row__poster ${props.isLargeRow && "row_posterLarge"}`}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Row;
