import { createSlice } from "@reduxjs/toolkit";


const myLibrarySlice = createSlice({
    name: "myLibrary",
    initialState: [],
    reducers: {
        add_song(state, action){
            if (!Array.isArray(state)) {
                 return [];
            }   
           const contains = state.some(song => song.name === action.payload.name);
           if(!contains){
                return [...state, action.payload];
           }
           return state;
        },
        remove_song(state, action){
            return state.filter(song => song !== action.payload);
        }
    }
});

const { reducer, actions } = myLibrarySlice;
export const { add_song, remove_song } = actions;
export default reducer;