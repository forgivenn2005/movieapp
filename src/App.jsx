import { useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import Moviecard from './components/Moviecard';

function App() {
  const [moviedata, setMoviedata] = useState(null);
  const [error, setError] = useState("");

  const fetchmovie = async (movie) => {
    try {
      const response = await fetch(`/api/movies?title=${encodeURIComponent(movie)}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMoviedata(data);
        setError(null);
      } else {
        setMoviedata(null);
        setError("Movie name not found");
      }
    } catch (err) {
      setMoviedata(null);
      setError("Unable to fetch data...");
    }
  };

  return (
    <div>
      <div className='ccc'>
        <h1 className='heading'>Movie App</h1>
      </div>
      <div className='container'>
        <Searchbar onSearch={fetchmovie} />
        <br />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {moviedata && <Moviecard data={moviedata} />}
      </div>
    </div>
  );
}

export default App;
