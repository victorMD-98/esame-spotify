import AlbumSong from "../Components/AlbumSong";
import NavbarComp from "../Components/NavbarComp";
import Player from "../Components/player";
import "../Assets/FileCss/mainAlbumSongs.scss"
import MainLinks from "../Components/MainLinks";
import { useParams } from "react-router-dom";
import { fetchAlbumSongs } from "../slice/getAlbumSongs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setIndex } from "../slice/riproduzioneAudioSlice";

export default function SongsPage(){
    
    const dispatch = useDispatch();
    const params = useParams();
    const albumSongs = useSelector(state => state.albumSongs);
    //console.log(albumSongs);
    //console.log(params);

    useEffect(() => {
        dispatch(fetchAlbumSongs(params.id));
        dispatch(setIndex(parseInt(params.i)));
    },[])     
    
    return (
        <>
           <header>
                <NavbarComp/>
           </header>
           <main className="mainAlbumSongs">
                <div>
                  <MainLinks/>
                  <div>
                        <div>
                            <img src={albumSongs.albumImg} alt="imgalbum" />
                            <p>{params.album}</p>
                            <button>Play</button>
                        </div>
                        <div>
                            {
                                albumSongs.songs.map((song, index) => <AlbumSong key={index} indice = {index} audioUrl = {song.preview} title={song.title_short} duration={song.duration} />)
                            }
                        </div>
                  </div>  
                </div>
           </main>
           <Player/> 
        </>
    )
}