import { useEffect, useRef, useState } from "react";
import "../Assets/FileCss/player.scss"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAudio } from "../slice/riproduzioneAudioSlice";
import { setIndex } from "../slice/riproduzioneAudioSlice";
import { add_song } from "../slice/myLibrarySlice";

export default function Player(){
    const [playPause, setPlayPause] = useState(true);
    const audioURL = useSelector(state => state.audio)
    const [audio, setAudio] = useState(null);
    const [loop, setLoop] = useState(false);
    const [durata, setDurata] = useState(0);
    const albumSongs = useSelector(state => state.albumSongs.songs);
    const [indice, setIndice] = useState(audioURL.index);
    const dispatch = useDispatch();
    const intervalRef = useRef(null);
    const [percentualeVolume, setPercentualeVolume] = useState(50);
    const [hover, setHover] = useState(false);
    const [autoPlay, setAutoPLay] = useState(false);
    const library = useSelector(state => state.myLibrary)
    console.log(library);

    useEffect(() => {
        modificaVolume(audio)
    },[percentualeVolume])

    useEffect(() => {
        setIndice(audioURL.index)
    },[audioURL.index])

    useEffect(() => {
        if(albumSongs.length > 0 ){
          dispatch(fetchAudio(albumSongs[indice].preview));
        };
        dispatch(setIndex(indice));
    },[indice, albumSongs])
    
    useEffect(() => {
        if(audio){
            audio.loop = loop;
        }
    },[loop]);

    useEffect(() => {
        if(audio){
            if(autoPlay){
                play();
            }
        }

        return () => {
            if(audio){
                pause();
            }
        }
    },[audio])

    useEffect(() => {
        const newAudio = new Audio(audioURL.url);
        setAudio(newAudio);
    },[audioURL.url])

    function play(){
            if(audio){
                audio.play()
                .then( () => {
                   setPlayPause(false);
                   contaSecondi(audio);
                   audio.loop = loop;
                   modificaVolume(audio);
                   setAutoPLay(true); 
                })
                .catch(() => {});
            }
    }

    function pause(){
        if(audio){
            audio.pause();
            setPlayPause(true);
            clearInterval(intervalRef.current);
        }
    }

    function modificaVolume(audio){
        if(audio){
            audio.volume = percentualeVolume / 100
        }
    }

    function contaSecondi(audio){
        intervalRef.current = setInterval( function () {
            if(audio && audio.currentTime){
              setDurata( Math.round(audio.currentTime));  
            }
            if(audio.currentTime === audio.duration){
                clearInterval(intervalRef.current);
                setPlayPause(true);
                if(!loop){
                  next();  
                }
            }
          },1000);
    }

    function next(){
        setIndice((prevIndex) => {
            if(prevIndex === albumSongs.length-1){
                return  0
            } else {
              return prevIndex + 1  
            }
        })
    }

    function previous(){
        setIndice((prevIndex) => {
            if(prevIndex === 0){
                return  albumSongs.length -1
            } else {
              return prevIndex - 1  
            }
        })
    }

    function like(){
        const song = {
            name: audioURL.nome,
            url: audioURL.url,
            img: audioURL.img
        }

        dispatch(add_song(song));
    }

    return (
            <div className='bg-dark player d-flex justify-content-center align-items-center'>
                <div className="d-flex align-items-center playerInfo">
                    <img src={audioURL.img} className="m-0" alt="" />
                    <div>
                      <p className="text-white fs-6" >{audioURL.nome}</p>  
                    </div>
                </div>
                <i className="bi bi-shuffle"></i>
                <i onClick={() => {previous()}} className="bi bi-arrow-left-circle-fill"></i>
                {playPause ? <i className="bi bi-play-circle-fill" onClick={ () => play()} ></i> : <i onClick={ () => pause()} className="bi bi-pause-circle-fill"></i> } 
                <i onClick={() => {next();}} className="bi bi-arrow-right-circle-fill"></i>
                <i onClick={() => !loop ? setLoop(true) : setLoop(false) } className={loop ? "bi bi-repeat-1" : "bi bi-repeat"}></i>
                <p className="text-white" >{"00 : " + durata.toString().padStart(2, "0")}</p>
                <div onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}} id="volume">
                    <input onInput={(e) => setPercentualeVolume(e.target.value)} type="range" id="range" min={0} max={100} value={percentualeVolume}/>
                    <div style={{position: "absolute", left: percentualeVolume + "%" }} id="selector"  >
                        <div className="selectBtn" ></div>
                        <div style={{display: hover ? "block" : "none" }} id="selectValue" >{percentualeVolume}</div>
                    </div>
                    <div style={{width: percentualeVolume + "%"}} id="progressBar"></div>   
                </div>
                <div>
                    <i onClick={() => like()} className="bi bi-heart"></i>
                </div>
            </div>
    )
                
}