import { atom } from 'recoil'
import { Movie } from '../typings'

export const modalState = atom({
    key: 'modalState',
    default: false,
  })

export const movieState = atom<Movie | null>({
  key: 'movieState',
  default: null,
})

export const searchState=atom<String>({
  key:'searchState',
  default:"jawan"
})