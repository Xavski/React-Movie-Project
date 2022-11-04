import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import SearchPage from "./components/SearchPage";
import DescriptionPage from "./components/DescriptionPage";
import Favourites from "./components/Favourites";
import { useEffect, useState } from "react";


function App() {

  const [favourite, setFavourite] = useState([])

  function addToFavourites(movie){
    setFavourite([...favourite, movie])
  }

  function removeMovie(item){
    setFavourite(favourite.filter(movie => movie.imdbID !== item.imdbID))
  }

  useEffect(()=>{
    console.log(favourite)
  },[favourite])

  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path=":id" element={<DescriptionPage addToFavourites={addToFavourites} favourite={favourite}/>} />
          <Route path="/favourites" element={<Favourites favourite={favourite} removeMovie={removeMovie}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
