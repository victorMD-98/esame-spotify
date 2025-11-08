import { useDispatch, useSelector } from "react-redux"
import { fetchAudio, setImage, setNome } from "../slice/riproduzioneAudioSlice";
import { setIndex } from "../slice/riproduzioneAudioSlice";

export default function AlbumSong({img, indice, audioUrl, title, duration}) {

    const dispatch = useDispatch();
    const blackIndex = useSelector(state => state.audio.index);

    return (
        <>
            <div className = {blackIndex === indice ? "bg-black canzone" : "canzone"} onClick={() => {dispatch(fetchAudio(audioUrl)); dispatch(setIndex(indice)); dispatch(setNome(title)); dispatch(setImage(img))}}>
                <span>{title}</span> <span>{`${Math.floor(duration / 60)} : ${(duration % 60).toString().padStart(2, "0")} `}</span>
            </div>
        </>
    )
}