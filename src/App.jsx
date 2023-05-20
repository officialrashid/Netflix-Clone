import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './Components/navBar/navBar';
import Banner from './Components/banner/banner';
import "./App.css";
import RowPost from './Components/RowPost/RowPost';
import { Originals, Action ,Romance,Horror,Comedy,Trending} from './Urls';
import MovieDetails from './Components/movieDetails/movieDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={
            <>
              <Banner/>
              <RowPost url={Originals} title='Netflix Originals'/>
              <RowPost url={Trending} title='Trending' isSmall={true}/>
              <RowPost url={Action} title='Action' isSmall={true}/>
              <RowPost url={Romance} title='Romance' isSmall={true}/>
              <RowPost url={Horror} title='Horror' isSmall={true}/>
              <RowPost url={Comedy} title='Comedy' isSmall={true}/>
            </>
          } />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
        </Routes>
        {/* Include your Footer component here */}
      </div>
    </Router>
  );
}

export default App;
