import Head from 'next/head'
import Header from '../components/Header'
import requests from '../utils/request'
import { Movie } from '../typings'
import Banner from '../components/Banner'
import Row from '../components/Row'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtoms'
import { RecoilRoot } from 'recoil'
import Modal from '../components/Modal'
import { searchState } from '../atoms/modalAtoms'
import { useEffect, useState } from 'react'

import { useSearchParams } from 'next/navigation';
import Spinner from '../components/Spinner'
interface Props{
  netflixOriginal:Movie[],
  netflixOriginals:Movie[]
  trendingNow:Movie[]
  topRated:Movie[]
  actionMovies:Movie[]
  comedyMovies:Movie[]
  horrorMovies:Movie[]
  romanceMovies:Movie[]
  documentaries:Movie[]
  hindiMovies:Movie[]
  searchResults:Movie[]
  
  
}


function index({netflixOriginal,
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
  hindiMovies,
 
}:Props) {


 /* eslint-disable */

 const [data,setData]=useState([]);
 const [data1,setData1]=useState(false);
 const searchData=useSearchParams();
 const [loader,setLoader]=useState(false);




  function searchFun(x:any){

    
    
    setLoader(true)
    fetch(`https://api.themoviedb.org/3/search/movie?query=${x}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then((res)=>{
      res.json().then(res=>{setData(res.results),setLoader(false)}).catch((err)=>alert("result not found"))
    
      
    })
    setData1(true)
  
    
  }
 
 
 
  

//  useEffect(()=>{
//   setLoader(true)
//   fetch(`https://api.themoviedb.org/3/search/movie?query=${searchData?.get("search")}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then((res)=>{
//     res.json().then(res=>setData(res.results)).catch((err)=>alert("result not found"))
//     setLoader(false)
//   })
// },[])


/* eslint-disable */
  const showModal = true
 
  
  return (

  
    <RecoilRoot>

     <div className="relative h-screen">
       <Head>
               <title>
                   Home- Nishu
               </title>
               <link rel="stylesheet" href="" />
       </Head>
       <Header searchFun={searchFun}/>
      
       <main className="pl-2  lg:space-y-24">
       <Banner netflixOriginals={netflixOriginals}/>
   
       <section className='md:space-y-9 space-y-0'>
        
        {
          loader?<Spinner/>:data1&&<Row title="Search Results" movies={data}/>
        }
           
       <Row title="Trending Now" movies={trendingNow}/>
            
           <Row title="Top Rated" movies={topRated}/>
           <Row title="Bollywood" movies={hindiMovies} />
           <Row title="Neflix Original" movies={netflixOriginals} />
           <Row title="Action Thrillers" movies={actionMovies} />
          
           <Row title="Comedies" movies={comedyMovies} />
           <Row title="Scary Movies" movies={horrorMovies} />
           <Row title="Romance Movies" movies={romanceMovies} />
           <Row title="Documentaries" movies={documentaries} />
         
       </section>
       </main>
       {showModal&&<Modal/>}
      
     </div>
    </RecoilRoot>

  

   
   
  )
}

export default index

export const getServerSideProps=async()=>{
  const [
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
      hindiMovies,
      
    ] = await Promise.all([
      fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTrending).then((res) => res.json()),
      fetch(requests.fetchTopRated).then((res) => res.json()),
      fetch(requests.fetchActionMovies).then((res) => res.json()),
      fetch(requests.fetchComedyMovies).then((res) => res.json()),
      fetch(requests.fetchHorrorMovies).then((res) => res.json()),
      fetch(requests.fetchRomanceMovies).then((res) => res.json()),
      fetch(requests.fetchDocumentaries).then((res) => res.json()),
      fetch(requests.fetchHindiMovies).then((res) => res.json()),
      
    ])


    return {
      props:{
        netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      hindiMovies:hindiMovies.results,
      
      }
    }
}
  
