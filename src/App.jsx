import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searchbar from './components/Searchbar'
import Moviecard from './components/Moviecard'
function App() {
  const [moviedata, setMoviedata] = useState(null);
  const [error,setError]= useState("");
  const fetchmovie = async (movie) => {
  try {
    const Api_key = import.meta.env.VITE_MOVIE_API_KEY;
    const response = await fetch(
      `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${Api_key}`
    );
    const data = await response.json();
    
    if (data.Response === "True") {
      setMoviedata(data);
      setError(null);
    } else {
      setMoviedata(null);
      setError("Galat movie name enter kiya hai");
    }
  } catch (err) {
    setMoviedata(null);
    setError("Unable to fetch data....");
  }
};

  return (
    <div>
    <div className='ccc'>
      <h1 className='heading'>Movie App</h1>
    </div>
    <div className='container'>
      
      <Searchbar onSearch={fetchmovie}/>
      <br/>
      <br/>
      {error&&<p style={{color: 'red'}}>{error}</p>}
      {moviedata&&<Moviecard data={moviedata}/>}
    </div>
    </div>
  )
}

export default App
