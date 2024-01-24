import { createStore, applyMiddleware, combineReducers} from "redux"
import {thunk } from "redux-thunk"
import Reducer from "../Reducers/Reducer"
const initialState={
    album : [],
    artista: []
}



export const store = createStore(Reducer,initialState,applyMiddleware(thunk))