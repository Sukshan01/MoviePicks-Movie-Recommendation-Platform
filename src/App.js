import React from 'react'
// import  ReactDOM  from 'react-dom'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './pages/MovieDetails/MovieDetails';

const App = () => {
  return (
    <div className='App'>
      

      <Router>
      <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<MovieDetails />}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
};

export default App
