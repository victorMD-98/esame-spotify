import { createStore, applyMiddleware, combineReducers} from "redux"
import {thunk } from "redux-thunk"
import Reducer from "../Reducers/Reducer"
import RicercaC from "../Reducers/RicercaC"
const initialState={
    album : [],
    artista: []
}

const bigReducers = combineReducers({
    artista: RicercaC,
    album: Reducer
})


export const store = createStore(bigReducers,initialState,applyMiddleware(thunk))