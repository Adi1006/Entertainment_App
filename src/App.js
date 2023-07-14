// import { Switch } from "react-router";
import { Container } from "@mui/system";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom"
import '../src/App.css';
import Header from './components/Header/header.js';
import SimpleBottomNavigation from './components/MainNav.js'
import Trending from './Pages/Trending/Trending.js'
import Movies from './Pages/Movies/Movies.js'
import Series from './Pages/Series/Series.js'
import Search from './Pages/Search/Search.js'



function App() {
  return (
    <Router>
    <Header />
    <div className="app">
      <Container>
        <Routes>
          <Route exact path="/" element={<Trending />}  />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation />
    </Router>
  );
}
export default App;
