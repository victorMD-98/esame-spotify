import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../slice/getSongsSlice"
import searchSongsReducer from "../slice/getSearchSong"
import albumSongsReducer from "../slice/getAlbumSongs"
import songAudioReducer from "../slice/riproduzioneAudioSlice"

export default configureStore({
    reducer: {
        songs : songsReducer,
        searchSongs: searchSongsReducer,
        albumSongs: albumSongsReducer,
        audio: songAudioReducer
    }
});