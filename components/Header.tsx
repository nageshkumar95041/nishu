import { Hidden } from "@mui/material";
import Link from "next/link"
import {useState,useEffect} from 'react'
import { useRecoilState } from "recoil";
import { searchState } from "../atoms/modalAtoms";
import { useSearchParams } from "next/navigation";
function Header(props:any) {

  const [isScoroll,setIsScroll]=useState(false);
  const [search,setSearch]=useState("search");
  const searchParams=useSearchParams();
  const BASE_URL = 'https://api.themoviedb.org/3';
 
  useEffect(()=>{
  const  handleScroll=()=>{
        if(window.scrollY>0){
          setIsScroll(true)
        }
        else{
          setIsScroll(false)
        }
        
    }
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

 

  const onChangeHandler=(e:any)=>setSearch(e.target.value);
   

  return (
   <header className={`${isScoroll && 'bg-[#141414]'}`}>
    <div className="flex space-x-2 items-center md:space-x-10 ">
        {/* <img src="https://rb.gy/ulxxee" alt="" width={100} height={100} className='cursor-pointer object-contain' /> */}
        <div className="text-red-500 text-4xl font-bold">Nishu</div>
        <ul className='hidden space-x-4 md:flex'>
            <li className='headerlink'>Home</li>
            <li className='headerlink'>Tv Shows</li>
            <li className='headerlink'>Movies</li>
            <li className='headerlink'>New & Popular</li>
            <li className='headerlink'>My List</li>
        </ul>
    </div>
    <div className="">
      <div className=" flex sm:flex space-x-4 text-sm font-light">
<form action="">
  <input className="rounded px-2 h-6 text-black" autoComplete="off" onChange={onChangeHandler}  type="text" name="search" id="" placeholder={search}  />
</form>
      <svg onClick={()=>props.searchFun(search)}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd"  />
</svg>


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hidden">
  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
</svg>
<p className="hidden">Kids</p>
<Link href='/login'>

</Link>
      </div>

      
   

    </div>
   </header>
  )
}

export default Header