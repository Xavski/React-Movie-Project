"http://www.omdbapi.com/?i=tt0045963&apikey=451ac588";

import axios from "axios";
import { useEffect, useState } from "react";

const UseMovieById = (movieId) => {
  const [id, setId] = useState([]);

  useEffect(() => {
    async function fetchDescription() {
      const { data } = await axios
        .get(`http://www.omdbapi.com/?i=${movieId}&apikey=451ac588`)
        .then();
      setId(data);
    }
    fetchDescription();
  }, [movieId]);

  return { id };
};

export default UseMovieById;
