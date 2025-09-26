import { useDispatch, useSelector } from "react-redux"
import { fetchAudio } from "../slice/riproduzioneAudioSlice";
import { setIndex } from "../slice/riproduzioneAudioSlice";
import { useEffect } from "react";


export default function AlbumSong({indice, audioUrl, title, duration}) {

    const dispatch = useDispatch();
    const blackIndex = useSelector(state => state.audio.index);

    return (
        <>
            <div className = {blackIndex === indice ? "bg-black canzone" : "canzone"} onClick={() => {dispatch(fetchAudio(audioUrl)); dispatch(setIndex(indice))}}>
                <span>{title}</span> <span>{`${Math.floor(duration / 60)} : ${(duration % 60).toString().padStart(2, "0")} `}</span>
            </div>
        </>
    )
}