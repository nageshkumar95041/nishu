import React from 'react'
import Image from 'next/image'
import { Movie } from '../typings'
import { useRecoilState } from 'recoil'
import { movieState } from '../atoms/modalAtoms'
import { modalState } from '../atoms/modalAtoms'
interface Props{
    movie:Movie
}
function Thumbnail({movie}:Props) {
  const [showModal,setShowModal]=useRecoilState(modalState);
  const [currentMovie,SetCurrentMovie]= useRecoilState(movieState);
  return (
    <div className='relative h-28 min-w-[180px] md:h-36 md:min-w-[260px] cursor-pointer transition duration-200 ease-in-out hover:scale-105' onClick={()=>{SetCurrentMovie(movie); setShowModal(true)}}>
        <Image alt='img' src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`} layout='fill' className='object-cover rounded-sm md:rounded'/>
    </div>
  )
}

export default Thumbnail