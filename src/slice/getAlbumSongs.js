import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAlbumSongs = createAsyncThunk(
    "album_songs",
    async (id) => {
        const response = await axios.get(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);
        return response.data;
    }
);


const albumSongsSlice = createSlice({

    name: "albumSongs",
    initialState: {
        albumImg: "",
        songs: [],
        status: "",
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchAlbumSongs.pending, (state) => {
                   state.status = "loading";
               })
               .addCase(fetchAlbumSongs.rejected, (state, action) => {
                    state.status = "failed";
                    state.error = action.error.message;
                })
               .addCase(fetchAlbumSongs.fulfilled, (state, action) => {
                   state.status = "succeeded";
                   state.songs = action.payload.tracks.data;
                   state.albumImg = action.payload.cover
               });
    }

});


const {reducer} = albumSongsSlice;
export default reducer;