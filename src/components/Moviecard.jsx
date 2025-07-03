
import React from 'react'
export default function Moviecard({data}){
    const {Title,Year,Rated,Genre,Poster}=data;

return(
    <div>
        <p><strong>Title:</strong>{Title}</p>
        <p><strong>Year:</strong>{Year}</p>
        <p><strong>Rated:</strong>{Rated}</p>
        <p><strong>Genre:</strong>{Genre}</p>
        <img
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={Title}
        />

    </div>
);
}