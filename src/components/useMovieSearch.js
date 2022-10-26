import axios from "axios";
import { useEffect, useState } from "react";

const UseMovieSearch = (term) => {
  const [movies, setMovies] = useState([]);

  
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
      
    }
    fetchMovies()
  }, [term]);
  return {movies};
};

export default UseMovieSearch;
