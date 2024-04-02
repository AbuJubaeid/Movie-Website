import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./rootReducer"
import saga from "./saga"


const sagaMiddleware = createSagaMiddleware()
const store = configureStore(
    {
        reducer:rootReducer,
        middleware:()=>[sagaMiddleware]
    }
)
sagaMiddleware.run(saga)

export default store