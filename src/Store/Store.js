import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../slice/getSongsSlice"
import searchSongsReducer from "../slice/getSearchSong"
import albumSongsReducer from "../slice/getAlbumSongs"
import songAudioReducer from "../slice/riproduzioneAudioSlice"
import library from "../slice/myLibrarySlice"
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { version } from "react";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["myLibrary"],
}

const persistedReducer = persistReducer(persistConfig, library)

const store = configureStore({
    reducer: {
        songs : songsReducer,
        searchSongs: searchSongsReducer,
        albumSongs: albumSongsReducer,
        audio: songAudioReducer,
        myLibrary: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export {store, persistor};