import React from 'react'

export default function RicercaC(state=[], action) {

    switch (action.type){
        case "SEARCH_SONGS":
            return [...action.payload]
        default:
            break;
    }
    
    return state
}
