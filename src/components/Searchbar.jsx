
import {useState }from 'react'
export default function Searchbar({onSearch}){
    const [movie,setMovie]=useState("");
    const handleKeyDown=(e)=>{
      if(e.key=='Enter')
      {
        handleSearch();
      }
    }
    const handleSearch=()=>{
       if(movie.trim()!=="")
       {
        onSearch(movie);
       }
    }

return(
    <div>
        <input type='text' onChange={e=>setMovie(e.target.value)} onKeyDown={handleKeyDown} placeholder='Enter movie name'></input>
        <button onClick={handleSearch}>Search</button>
    </div>
);
}