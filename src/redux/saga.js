import { put, takeEvery } from 'redux-saga/effects';
import { movieList, searchmovie, setmovieList } from './constant';


function* getMovieList(){
    let data = yield fetch('http://localhost:3000/movie')
    data = yield data.json()
    yield put({type:setmovieList, data})
}

function* searchMovies(data) {
    let result = yield fetch(`http://localhost:3000/movie?q=${data.query}`);
    result = yield result.json();
    console.warn("action is called", result)
    yield put({type: setmovieList, data:result})
}



function* saga (){
    yield takeEvery(movieList, getMovieList)
    yield takeEvery(searchmovie, searchMovies)
}

export default saga