import React from 'react';
import './App.css';
import TopBanner from './Blah';
import Navbar from './Navbar';
import MovieList from './Movies';

function MoviePage() {
  return (
    <div className="App">
      <Navbar />
      <TopBanner saying="All Movies" />
      <MovieList />
    </div>
  );
}

export default MoviePage;
