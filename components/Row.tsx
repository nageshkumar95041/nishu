import React, { useRef, useState ,useEffect} from 'react'
import { Movie } from '../typings'
import { HiChevronLeft, HiChevronRight} from "react-icons/hi2";
import Thumbnail from './Thumbnail';



interface Props{
    title:String,
    movies:Movie[],
    
}
function Row({title,movies}:Props) {

   
  
    const rowRef=useRef<HTMLDivElement>(null)
    const [moved,isMoved]=useState(false)
    const handleClick=(direction:string)=>{
      isMoved(true);
      if(rowRef.current){
        const {scrollLeft,clientWidth}=rowRef.current;
      const scrollTo=  direction==='left'?scrollLeft-clientWidth:scrollLeft+clientWidth;
      rowRef.current.scrollTo({left:scrollTo,behavior:'smooth'})
      }
    }
  const [data,setData]=useState([]);

   
    

  

  return (
    <div className='h-36 space-y-0.5 md:space-y-1 space-x-0'>
        <h2 className='w-56  cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white '>{title}</h2>
    <div className=" group relative md:ml-2">
    
        <HiChevronLeft onClick={()=>handleClick('left')} className={`h-9 w-9 absolute top-0 bottom-0 left-2 z-40 m-auto cursor-pointer ${!moved &&'hidden'}`}/>
    <div ref={rowRef} className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">

{movies.map((movie)=>{
    return  <Thumbnail movie={movie} key={movie.id}/>
})}

    </div>
        <HiChevronRight onClick={()=>handleClick('right')} className='h-9 w-9 absolute top-0 bottom-0 right-2 z-40 m-auto cursor-pointer'/>
  
    </div>
    </div>
  )
}

export default Row