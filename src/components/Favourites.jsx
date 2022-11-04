import React from "react";
import "./Favourites.css";
import Empty from "../assets/Empty.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Favourites = ({ favourite, removeMovie }) => {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(false)
  },[])

  return (
    <div id="favourite">
      <div className="favourite__titlePage">Favourites</div>

      <div className="movie__card--container favourite__container">
        {favourite.length === 0 ? (
          <>
            <div className="favourite__empty">
              <img src={Empty} alt="" className="empty__img" />
              <div className="empty__description">No Movies Added</div>
            </div>
          </>
        ) : (
            favourite.map((movie) => {
              return (
                <div className="movie__container no-hover">
                <img
                src={movie.Poster}
                alt=""
                className="movie__poster no-hover"
                />
                <div className="movie__description">
                <div className="movie__title">{movie.Title}</div>
                </div>
                <div className="btn__wrapper">
                <button className="remove" onClick={() => removeMovie(movie)}>
                remove
                </button>
                </div>
                </div>
                );
              })
        )}
      </div>
      <Link to="/search" className="favourite__more-movies">
        <button className="more__movies">Search For Movies</button>
      </Link>

    </div>
  );
};

export default Favourites;
