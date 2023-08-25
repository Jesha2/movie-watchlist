import React from 'react';
import MovieCard from './MovieCard';

const MovieScreen = ({removeMovie,addMovie, movieList, watchList, page,setPage}) => {
   // console.log(movieList, watchList, page);
    const movieDisplay = movieList.map((movie,index)=>{
        return <MovieCard key={index} movie={movie} addMovie={addMovie} removeMovie={removeMovie} watchList={watchList}/> 
        // return `<h2> ${movie.original_title}</h2>`
    })
    const increment=()=>{
      setPage(page+1)
    }
    const decrement=()=>{
      setPage(page-1)
    }

   // console.log(movieList[0].original_title);
  return (
    <div className='page'>
      <h1>Fajesha’s Movie Theatre</h1>
      <h3>Add a Movie to your watch list</h3>
      <div className= "btn-container">
          {page != 1 &&  <button onClick={decrement}>Previous</button>}
          <button onClick ={increment}>Next</button>
      </div>
      <div className='movie-container'>
        {movieDisplay}
     </div>
              {/* {
                  movieList.map((movie,index)=><MovieCard key={index} movie={movie}/>
              )} */}
      
    </div>
  )
}

export default MovieScreen
