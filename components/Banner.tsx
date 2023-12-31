import React, { useEffect, useState } from 'react'
import { Movie } from '../typings'
import Image from 'next/image'
import { baseUrl } from '../constant/movie'
import {FaPlay} from 'react-icons/fa'
import { HiInformationCircle } from "react-icons/hi2";
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtoms'

interface Props{
  
  netflixOriginals:Movie[]

}
function Banner({netflixOriginals}:Props) {
  const [movie,setMovie]=useState<null|Movie>(null)
  const [showModal,setShowModal]=useRecoilState(modalState)
  const [currentMovie,setCurrentMovie]=useRecoilState(movieState)
  useEffect(()=>{
   setMovie(netflixOriginals[Math.floor(Math.random()*netflixOriginals.length)])
  },[netflixOriginals])
   
  return (
   <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
    <div className='absolute top-0 left-0 h-[100vh] -z-20 w-full'>
      <Image alt='img' objectFit='cover'  layout='fill'  src={`${baseUrl}${movie?.backdrop_path||movie?.poster_path}`}/>
    </div>
    <h1 className='text-2xl font-bold md:text-4xl lg:text-6xl'>{movie?.title||movie?.name|| movie?.original_name}</h1>
    <p className='max-w-xs text-2xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>{movie?.overview.length!=undefined&&movie.overview.length>200?movie.overview.slice(0,200):movie?.overview}</p>
    <div className='flex space-x-2'>
      <button className='bannerButton bg-white text-black'  onClick={()=>{setCurrentMovie(movie); setShowModal(true)}}><FaPlay className='h-4 w-4 text-black md:h-7 md:w-7'/>Play</button>
      <button className='bannerButton bg-[gray]/70' onClick={()=>{setCurrentMovie(movie); setShowModal(true)}}><HiInformationCircle className='h-4 w-4 text-white md:h-7 md:w-7' /> More Info</button>
    </div>
   </div>
  )
}

export default Banner