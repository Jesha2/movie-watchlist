import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MovieScreen from './components/MovieScreen';
import WatchList from './components/WatchList'

function App() {
  const [page, setPage] = useState(1);
  const[movieList, setMovieList] = useState([]);
  const[watchList, setWatchList] = useState([]);
  
  const addMovie = (movie) => {
    console.log(movie);
    setWatchList(prevWatchList => [...prevWatchList, movie]);
    //setWatchList([...watchList, movie]);
    console.log(watchList);
  }

  const removeMovie =(movie)=>{
    const newState=watchList.filter(list=>list !== movie)
    setWatchList(newState);
  }
const api_url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;

  const getData = ()=>{
    axios.get(api_url)
    .then((res)=>{
      //console.log(res.data.results);
      setMovieList(res.data.results)
    })
    .catch(e=>{console.log(e)})
  }
  useEffect(()=>{
    getData();
  }
  ,[page])

  return (
    <div className="App">
     <Header />
     <main>
          <MovieScreen 
          removeMovie={removeMovie}
          addMovie={addMovie}
          movieList={movieList} 
          watchList={watchList} page={page} setPage={setPage}/>

          <WatchList 
           watchList={watchList} 
           addMovie={addMovie}
           removeMovie={removeMovie} />
     </main>
    </div>
  );
}

export default App;
