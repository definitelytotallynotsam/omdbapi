import React, { useEffect, useState } from "react";
import './App.css';
import Movielist from "./movielist";
import Searchmovie from "./Searchmovie.js";

const App = () => {

  const[searchmovie, setSearchmovie] = useState('')
  const[movie, setMovie] = useState([])

  const Requestmovie = async()=>{
    const url = `http://www.omdbapi.com/?s=${searchmovie}&apikey=d9c61aaap`;
    const response = await fetch(url);
    const data = await response.json();
    if(data.Search){
    setMovie(data.Search);
    }
  }

  useEffect(() =>{
    Requestmovie(searchmovie);
  }, [searchmovie])



  return (
  <div className="whole">    
    <div className="movie">
      <Searchmovie searchmovie={searchmovie} setSearchmovie={setSearchmovie}/>
    </div>
    <div className="card d-flex flex-wrap">
    <h1></h1>
    <Movielist movie={movie}/>
    </div>
    </div>
  )
  
}

export default App;