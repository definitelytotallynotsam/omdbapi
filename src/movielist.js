import React from "react";

const Movielist = (props) => {
return(
 <>
 {props.movie.map((movie,index)=>(
<div className="image">
 <img src={movie.Poster} alt="movie poster"/>
</div>
))}
 </>
 )
}

export default Movielist;
