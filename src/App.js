import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import SearchPage from "./components/SearchPage";
import DescriptionPage from "./components/DescriptionPage";


function App() {
 

  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path=":id" element={<DescriptionPage/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
