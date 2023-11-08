import React, { useEffect, useRef } from 'react'
import MuiModal from '@mui/material/Modal'
import { RecoilState, useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtoms'
import { useState } from 'react'
import { Movie } from '../typings'
import { Element} from '../typings'
import ReactPlayer from 'react-player/lazy'
import { FaPlay, FaVolumeDown } from 'react-icons/fa'
import { HiOutlinePlusCircle,} from 'react-icons/hi2'
import { FaExpand } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa'
import FullscreenIcon from '@mui/material/Icon';
import { FaVolumeOff,FaVolumeUp } from 'react-icons/fa'
import { Genre } from '../typings'
import { findDOMNode } from 'react-dom'


import { Button } from '@mui/material'








function Modal() {
    const [showModal,setShowModal]=useRecoilState(modalState);
    const [movie,setMovie]= useRecoilState(movieState);
    const [data,setData]=useState()
    const [trailer,setTrailer]=useState("");
    const [generes,setGeneres]=useState([])
    const [muted,isMuted]=useState(false);
    const [play,setPlay]=useState(true);
    const [playerIcon,setPlayerIcon]=useState(true);
   
    const handleClose=()=>{
        setShowModal(false);
    }
  
    useEffect(()=>{
        if(!movie)return
        async function fetchMovie(){
            const data = await fetch(
                `https://api.themoviedb.org/3/${
                  movie?.media_type === 'tv' ? 'tv' : 'movie'
                }/${movie?.id}?api_key=2191cfb43fc6b9ee03a23838f2bfa964&language=hi,en-IN&append_to_response=videos`
              ).then((response)=>response.json());
             if(data?.videos){
                const index=data.videos.results.findIndex((element:Element)=>element.type==="Trailer")
                setTrailer(data.videos.results[index]?.key)
             }
             if(data?.genres){
                setGeneres(data.genres);
             }
             
        }
        fetchMovie();
    },[movie])
   const Ref=useRef();
   const onplayhandle=()=>{
     setPlayerIcon(false)
   }
   const pauseHandle=()=>{
    setPlayerIcon(true)
   }

  
  return (
    <MuiModal open={showModal} onClose={handleClose} className='fixex z-50 landscape:top-0 mx-auto  left-0 right-0 md:rounded-md overflow-y-hidden scrollbar-hide overflow-hidden md:max-w-4xl w-full'>
        <>
      {playerIcon?<button className='absolute modalButton right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]' onClick={()=>setShowModal(false)}>
          <svg className='h-5 w-6' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
</svg>
          </button>:""}    
          <div className='relative pt-[56.25%]  w-full '>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing={play}
            muted={muted}
            onPlay={onplayhandle}
            onPause={pauseHandle}
           
          />
          <div className="absolute flex w-full items-center bottom-1/4 justify-between px-10 ">
           <div className='flex' >
          {playerIcon?<button className='flex gap-x-4 bg-white rounded text-black font-bold items-center px-2 cursor-pointer transition hover:bg-[#e6e6e6]' onClick={()=>setPlay(!play)}>
             <FaPlay className='h-7 w-7 text-black ' />
              {play?"Play":"Pause"}
            </button>:""}  
         {playerIcon?<Button>
              <HiOutlinePlusCircle  className='h-7 w-7 text-white '/>
            </Button>:""}   

           </div>
           <div>
           {
  muted?
            <Button className='text-white modalButton' onClick={()=>{isMuted(!muted);isMuted(!muted)}}>
              <FaVolumeOff className='md:text-white md:h-7 md:w-7 '/>
            </Button>:null
            // <Button className='text-white modalButton' onClick={()=>isMuted(!muted)}>
            //   <FaVolumeUp className='text-white h-7 w-7'/>
            // </Button>
}
           {playerIcon?<Button className='text-white modalButton'>
              <FaExpand className='text-white h-7 w-7'/>
            </Button>:null}   
           </div>
          </div>
          </div>
          {playerIcon?
          <div className="flex md:space-x-16  rounded-b-md bg-[#181818] px-10 py-8 flex-col">
            <div className="space-y-5 text-lg ">
              <div className='flex items-center space-x-2 text-sm'>
                <p className='font-bold text-green-400 text-sm'>{movie==undefined?0:movie.vote_average*10}% Match</p>
                <p className='font-light'>{movie?.release_date||movie?.first_air_date}</p>
              <div className="flex justify-self-center items-center h-4 rounded border-white/40 px-1.5 text-sm">HD</div>
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className='w-5/6'>{movie?.overview}</p>
              <div className="">
                <div className="">
                  <span className='text-[gray]'>Genres:</span>
                  {generes.map((genre:Genre)=>genre?.name).join(",")}
                </div>
                <div >
                  <span className='text-[gray]' >Original language:</span>
                  {movie?.original_language}
                </div>
                <div >
                 <span className='text-[gray]'>Vote count:</span>
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>:null

          }
        </>
    </MuiModal>
  )
}

export default Modal