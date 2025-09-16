import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../slice/getSongsSlice"
import searchSongsReducer from "../slice/getSearchSong"

export default configureStore({
    reducer: {
        songs : songsReducer,
        searchSongs: searchSongsReducer
    }
});