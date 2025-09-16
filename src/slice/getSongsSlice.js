import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CANTANTI = ["queen", "salmo", "fabri fibra", "tiziano ferro"];

export const fetchSongs = createAsyncThunk(
    "canzoni-In-Base-Al-Artista",
    async () => {
        try{
         let promises = CANTANTI.map((artista) => axios.get(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artista}`)
          .then(res => res.data.data));

          let response = await Promise.all(promises);
          return response
      } catch(err){
        console.log(err);
      }
    }
);

const songsSlice = createSlice({
    name: "songs",
    initialState: {
        songs: [],
        status: "",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSongs.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchSongs.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(fetchSongs.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.songs = action.payload;
        });
    }
});

const {reducer} = songsSlice;
export default reducer;




