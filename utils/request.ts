import { useRecoilState, useRecoilValue } from "recoil"
import { searchState } from "../atoms/modalAtoms"
import { useSearchParams } from "next/navigation"



const BASE_URL = 'https://api.themoviedb.org/3'


const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&with_genres=99`,
  fetchHindiMovies: `${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_original_language=hi`,
  

  
}



export default requests







