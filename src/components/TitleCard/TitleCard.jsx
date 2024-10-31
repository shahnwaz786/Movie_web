import React, { useEffect, useRef, useState } from 'react'
import cards_data from "../../assets/cards/Cards_data.js"
import "./TitleCard.css"
import { Link } from 'react-router-dom';




const TitleCard = ({title, category}) => {

const [apidata,setApiData]= useState([]);


  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjU2OGRhNTJhZjI5ZjgxODI2OWE3OWNiMzkzMjg0MyIsIm5iZiI6MTczMDI3MjU5NC4xNDgyNTgyLCJzdWIiOiI2NzIxZGJlNjQ3ZmUwOTdjMTkzZjkzMTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DUi2RW4Fv586G610Gu0AEGF7RdN7Dq8DRT7eOw0PnuU'
    }
  };
  
  


  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${category? category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  },[])



  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Greatflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((item,index)=> {
          return <Link to={`/player/${item.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+item.backdrop_path} alt="image" />
          <p>{item.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCard