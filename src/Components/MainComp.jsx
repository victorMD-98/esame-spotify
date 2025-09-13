import React, { useEffect, useState } from 'react'
import "../Assets/FileCss/style.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Canzoni from './Canzoni';
import {Container} from "react-bootstrap"
import axios from 'axios';
import { fetchSongs } from '../slice/getSongsSlice';
import SearchSong from './SearchSong';

export default function MainComp() {
  
  const [songs, setSongs] = useState({
    rock: [],
    pop: [],
    hiphop: []
  });
  const stateFetchSongs = useSelector(state => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( fetchSongs()); 
  },[])

  function canzoni(){
      if(stateFetchSongs.status === "succeeded") {
      stateFetchSongs.songs.forEach(element => {
      setSongs((prevSong) => 
         ({
          rock: [...prevSong.rock, element[Math.floor(Math.random() * element.length)]],
          pop: [...prevSong.pop, element[Math.floor(Math.random() * element.length)]],
          hiphop: [...prevSong.hiphop, element[Math.floor(Math.random() * element.length)]]
        })
       )
      });
      } 
  }

  useEffect(() => {
    canzoni();
  }, [stateFetchSongs])

  console.log(songs);

  console.log(stateFetchSongs);
  return (
    <>
          <div className="col-12 col-md-9 offset-md-3 mainPage">
           <div className="row mb-3">
            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
              <Link >TRENDING</Link>
              <Link >PODCAST</Link>
              <Link >MOODS AND GENRES</Link>
              <Link >NEW RELEASES</Link>
              <Link >DISCOVER</Link>
            </div>
            {/* {songs.rock && <> <div><h2 className='text-white'>Ricerca</h2></div>
              <Container className='d-flex flex-wrap'> {songs.rock.slice(0,8).map(e => <SearchSong key={e.id} img={e.album.cover_medium} titolo={e.album.title} artista={e.artist.name} />) }</Container> </>} */}
            <div><h2 className='text-white'>Rock Classic</h2></div>
              <Container className='d-flex flex-wrap'> {songs.rock.slice(0,4).map(e => <Canzoni key={e.id} img={e.album.cover_medium} titolo={e.album.title} artista={e.artist.name} />) }</Container>
              <div><h2 className='text-white'>Pop Culture</h2></div>
              <Container className='d-flex flex-wrap'> {songs.pop.slice(0,4).map(e => <Canzoni key={e.id} img={e.album.cover_medium} titolo={e.album.title} artista={e.artist.name} />) }</Container>
              <div><h2 className='text-white'>HipHop</h2></div>
              <Container className='d-flex flex-wrap'> {songs.hiphop.slice(0,4).map(e => <Canzoni key={e.id} img={e.album.cover_medium} titolo={e.album.title} artista={e.artist.name} />) }</Container>
            </div >
            
        </div>
    </>
  )
}
