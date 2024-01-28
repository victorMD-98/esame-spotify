import React from 'react'

export default function Reducer(state=[], action) {
    console.log(state)
    switch (action.type){
        case "GET_SONGS":
            return  [...action.payload];

        default:
            break;
    }
    
    return state
}
