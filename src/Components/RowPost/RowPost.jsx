import React,{useEffect,useState} from 'react'
import "./RowPost.css"
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constant/constant'
import Youtube from 'react-youtube'
import {useNavigate} from 'react-router-dom'
function RowPost(props) {
  
const [movies , setMovie] = useState([])
const navigate=useNavigate();


  useEffect(()=>{

    axios.get(props.url).then((response)=>{

     console.log(response.data.results);
     setMovie(response.data.results)
  })
  },[])

  const handleMovieClick=(id)=>{
     
    console.log(id,"pppppp000");

    navigate(`/movieDetails/${id}`)
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>

          <img onClick={()=>handleMovieClick(obj.id)} className={props.isSmall ? 'smallPoster':'poster' }src={`${imageUrl+obj.backdrop_path }`} alt="" />

          )}   
        </div>
     
    </div>
  )
}

export default RowPost
