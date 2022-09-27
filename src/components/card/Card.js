import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import './Card.css'

const Card=(movie)=>{
 
    const[isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])

  return (
    isLoading
    ?
    <div className='card'>
         <SkeletonTheme color='#576574' highlightColor='#8395a7'>
            <Skeleton height={300} duration={2}/>
        </SkeletonTheme>
    </div>
    :
    <Link to={`movie/${movie.id}`} style ={{textDecoration:"none" , color:"white"}}>
         <div className='card'>
                <img className='card_img' src='https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}'/>
                <div className='card_overlay'>
                        <div className='card_title'>{movie?movie.original_title:""}</div>
                        <div className='card_runtime'>{movie?movie.release_date:""}</div>
                        <div className='card_rating'>{movie?movie.vote_average:""}<i className='fas fa-star'/></div>
                </div>
                <div className='card_description'>{movie?movie.overview.slice(0,110)+"":""}</div>
        </div>
    </Link>
  )
}

export default Card