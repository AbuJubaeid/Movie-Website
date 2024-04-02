import { setmovieList } from './constant'

const MovieListReducer = (data=[], action) => {
  switch(action.type){
    case setmovieList:
        return [...action.data]
  default:
    return data      
  }
}

export default MovieListReducer