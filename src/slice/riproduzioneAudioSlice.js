import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAudio = createAsyncThunk(
    "audio-canzone",
    async (soundUrl) => {
        const response = await axios.get(soundUrl,{ responseType: 'blob' });
        return URL.createObjectURL(response.data)
    }
)

const audioSlice = createSlice({
    name: "audio",
    initialState: {
        url: null,
        status: "",
        error: null,
        index: 0
    },
    reducers: {
        setIndex(state, action){
            state.index = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAudio.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchAudio.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(fetchAudio.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.url = action.payload;
        });
    }
});

const {reducer, actions} = audioSlice;
export const {setIndex} = actions;
export default reducer;