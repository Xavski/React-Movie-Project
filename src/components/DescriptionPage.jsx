import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DescriptionPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const DescriptionPage = ({ addToFavourites, favourite }) => {
  const movieId = useParams();
  const [id, setId] = useState([]);
  const [loading, setLoading] = useState(true);
  
  function movieExistsInFavourite(){
    return favourite.find(movie => movie.imdbID === id.imdbID)
  }

  function addMovieToFavourites(){
    addToFavourites(id)
  }

  useEffect(() => {
    async function fetchDescription() {
      const { data } = await axios
        .get(`https://www.omdbapi.com/?i=${movieId.id}&apikey=451ac588`)
        .then();
      setId(data);
      setLoading(false);
    }
    fetchDescription();
  }, [movieId.id]);

  return (
    <div id="descriptionPage">
      <div className="movie__description--container">
        <div className="description__row">
          {loading ? (
            <div className="spinner__container">
              <FontAwesomeIcon icon={faSpinner} className="spinner" />
            </div>
          ) : (
            <div className="description__container">
              <div className="movie__img">
                <img src={id.Poster} alt="" />
              </div>

              <div className="movie__descriptionPage">
                <div className="movie__description--title">{id.Title}</div>

                <div className="movie__details--containerTop">
                  <div className="movie__rated">{id.Rated}</div>

                  <div className="movie__release">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="calendar"
                    />
                    {id.Year}
                  </div>

                  <div className="movie__runtime">
                    <FontAwesomeIcon icon={faClock} className="clock" />
                    {id.Runtime}
                  </div>
                </div>

                <div className="movie__genre">
                  <h4>Genre</h4>
                  {id.Genre}
                </div>

                <div className="movie__overview">
                  <h2>Overview</h2>
                  <p>{id.Plot}</p>
                </div>

                <div className="movie__details--containerBottom">
                  <div className="movie__director">
                    <h3>Director</h3>
                    {id.Director}
                  </div>

                  <div className="movie__rating">
                    <h3>imdbRating </h3>
                    {id.imdbRating}/10
                  </div>
                </div>
                {
                  movieExistsInFavourite() ? <Link to ='/favourites'><button className="btn">Go To Favourites</button></Link>:
                  <button className="btn" onClick={()=>addMovieToFavourites(id)}>Add To Favourites</button>
                }
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
