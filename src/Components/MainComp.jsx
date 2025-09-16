import { useEffect, useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Album from './Album';
import {Container} from "react-bootstrap"
import { fetchSongs } from '../slice/getSongsSlice';
import SearchSong from './SearchSong';
import Player from './player';



export default function MainComp() {
  const elementiUl = ["TRENDING", "PODCAST", "MOODS AND GENRES", "NEW RELEASES", "DISCOVER" ];
  const [songs, setSongs] = useState({
    Rock: [],
    Pop: [],
    Hiphop: []
  });

  const dispatch = useDispatch();

  const stateFetchSongs = useSelector(state => state.songs);
  const searchSongs = useSelector(state => state.searchSongs);

  useEffect(() => {
    dispatch( fetchSongs()); 
  },[])

  useEffect(() => {
    canzoni();
  }, [stateFetchSongs]);

function canzoni(){
      if(stateFetchSongs.status === "succeeded") {
      stateFetchSongs.songs.forEach(element => {
      setSongs((prevSong) => 
         ({
          Rock: [...prevSong.Rock, element[Math.floor(Math.random() * element.length)]],
          Pop: [...prevSong.Pop, element[Math.floor(Math.random() * element.length)]],
          Hiphop: [...prevSong.Hiphop, element[Math.floor(Math.random() * element.length)]]
        })
       )
      });
      } 
  }
  function prova(){
    return (
      ""
    )
  }

  function prova2(){
    return <>
              <div><h2 className='text-white'>ricerca</h2></div>
              <Container className='d-flex flex-wrap'> {searchSongs.songs.map(e => <Album key={e.id} img={e.album.cover_medium} titolo={e.album.title} artista={e.artist.name} />) }</Container>
           </>
  }

  return (
    <>
        <div>
            <ul>
                {
                  elementiUl.map((e, index) => {
                    return <li key={index}> <Link className='linkMain' > {e} </Link> </li> 
                    }
                  )
                }
            </ul>
        </div>
        <div>
          {
            Object.entries(songs).map(([key, value]) => {
              return (
                      <>
                        <div>
                          <h3>{key}</h3>
                          <div className='album'>
                            {value.slice(0,4).map(e => <Album key={e.id} img={e.album.cover_medium} titolo={e.album.title} artista={e.artist.name} />)} 
                          </div>
                        </div>
                      </>
              ) 
            })
          }
            <h3></h3>
            
        </div>
    </>
  )
}
