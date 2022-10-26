import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import SearchBar from "./ui/SearchBar";
import UseMovieSearch from "./useMovieSearch";
import SearchNotFound from "../assets/SearchNotFound.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function SearchPage() {
  const navigate = useNavigate();
  let [{ term }, dispatch] = useStateValue();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)
  function movieId(id) {
    navigate(`/${id}`);
  }

  
  useEffect(() => {
    async function fetchMovies() {
      if (term === null){
        term = '' 
      }
      const { data } = await axios
        .get(`https://www.omdbapi.com/?s=${term}&apikey=451ac588`)
        .then();
      const moviesData = data["Search"];
      setMovies(moviesData);
      setLoading(false)
    }
    fetchMovies();
  },[term]); 

  return (
    <div className="movies">
      <div className="searchPage__searchBar--container">
        <SearchBar />
      </div>

      <div className="movie__card--container">
        {movies === undefined ? (
          <div className="movieNotFound">
            <img src={SearchNotFound} className="notFound__img" alt="" />
            <div className="notFound__txt">Movies Not Found</div>
          </div>
        ) : (
          movies.map((movie) => (
            <div className="movie__container" key={movie.imdbID}>
              <img
                src={movie.Poster}
                alt=""
                className="movie__poster"
                onClick={() => movieId(movie.imdbID)}
              />
              <div className="movie__description">
                <div className="movie__title">{movie.Title}</div>
              </div>
            </div>
          ))
        )}
        {
          loading && <div className="spinner__container"><FontAwesomeIcon icon={faSpinner} className='spinner'/></div>
        }
      </div>
    </div>
  );
}

export default SearchPage;
