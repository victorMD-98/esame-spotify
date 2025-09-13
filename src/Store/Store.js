import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../slice/getSongsSlice"

export default configureStore({
    reducer: {
        songs : songsReducer
    }
})