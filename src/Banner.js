import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import requests from "./requests.js";
import "./style/Banner.css";

function Banner() {

   const [movie, setMovie] = useState([]);
   const style = {
      backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
   };

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(requests.fetchNetflixOriginals);
         console.log("Banner", request.data.results);
         setMovie(
            request.data.results[
            Math.floor(Math.random() * request.data.results.length)
            ]
         );
      }
      fetchData();
   }, []);

   console.log("movie", movie);
   console.log("movie1", movie.name);
   console.log("movie2", movie?.name);
   function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
      
   }

   return (
      <header className="banner" style={style}>
         <div className="banner__contents" >
            <h1 className="banner__title">
               {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__buttons">
               <button className="banner__button">Play</button>
               <button className="banner__button">My List </button>
            </div>
            <h1 className="banner__description">

               {/* {movie.overview
                  && truncate(movie.overview, 100)
               } */}

               {} 
               {truncate(movie?.overview, 150)}

            </h1>
            <div className="banner--fadeBottom"> </div>
         </div>
      </header>
   );
}
export default Banner;
