import { createStore, applyMiddleware, combineReducers} from "redux"
import {thunk } from "redux-thunk"
import Reducer from "../Reducers/Reducer"
const initialState={
    album : []
    
}

const AllReducers = combineReducers({
    album: Reducer,
    
})

export const store = createStore(AllReducers,initialState,applyMiddleware(thunk))