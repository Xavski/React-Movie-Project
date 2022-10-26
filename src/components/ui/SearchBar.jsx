import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import "./SearchBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/search");
  };
  

  return (
    <form>
      <div className="searchBar">
        <div className="searchBar__wrap">
          <input
            type="text"
            placeholder="Search movies..."
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="search__btn" onClick={search}><FontAwesomeIcon icon={faSearch}/></button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
