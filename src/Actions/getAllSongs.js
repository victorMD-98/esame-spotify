

export function getAllSongs() {

  return function(dispatch, getState){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen").then(response=>response.json()).then(json=> {return dispatch({type: "GET_SONGS", payload: json.data})})
  }
}


export function searchSongs (artista){

  return function(dispatch, getState){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+ artista).then(response=>response.json()).then(json=> {return dispatch({type: "SEARCH_SONGS", payload: json.data})})
  }

}
