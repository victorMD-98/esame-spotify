import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSong = createAsyncThunk(
    "canzoni_artista_ricerca",
    async ( artista ) => {
       const response = await axios.get(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artista}`);
       return response.data.data;
    }
);

const songSlice = createSlice({
    name: "search_songs",
    initialState: {
        songs: [],
        status: "",
        error: null
    },
    reducers: {
        reset: (state) => {
            state.songs = [];
        }
    },
        extraReducers: (builder) => {
            builder.addCase(fetchSong.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSong.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchSong.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.songs = action.payload;
            });
        }
});

const {reducer, actions} = songSlice;
export const {reset} = actions;
export default reducer;