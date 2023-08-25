import React from 'react';
import MovieCard from './MovieCard';

const WatchList = ({watchList, addMovie, removeMovie}) => {

    const movieDisplay= watchList.map((movie,index)=>{
        return <MovieCard watchList={watchList} key={index} movie={movie} addMovie={addMovie} removeMovie={removeMovie} />
    })
  return (
    <div className='watchlist'>
        <h1>My watch list</h1>
      <div className='movie-container'>
        {movieDisplay}
      </div>
    </div>
  )
}

export default WatchList
