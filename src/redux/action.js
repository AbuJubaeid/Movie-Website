import { movieList, searchmovie } from "./constant"

export const MovieList = () => {
  return ({
    type:movieList
  }
    
  )
}

export const movieSearch = (query) => {
  
  return {
      type: searchmovie,
      query
  }
}