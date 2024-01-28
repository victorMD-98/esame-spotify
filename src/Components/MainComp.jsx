import React, { useEffect } from 'react'
import "../Assets/FileCss/style.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getAllSongs} from '../Actions/getAllSongs';
import SearchSong from './SearchSong';
import Canzoni from './Canzoni';
import {Container} from "react-bootstrap"




export default function MainComp() {

    const album = useSelector(state => state.album)
    console.log(album)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllSongs())
    },[])

    const canzoniR = useSelector(state=> state.artista)
    console.log(canzoniR)

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
            {canzoniR && <> <div><h2 className='text-white'>Ricerca</h2></div>
              <Container className='d-flex flex-wrap'> {canzoniR.slice(0,8).map(e => <SearchSong key={e.id} img={e.album.cover_medium} titolo={e.album.title} artista={e.artist.name} />) }</Container> </>}
            <div><h2 className='text-white'>Canzoni</h2></div>
              <Container className='d-flex flex-wrap'> {album.slice(0,8).map(e => <Canzoni key={e.id} img={e.album.cover_medium} titolo={e.album.title} artista={e.artist.name} />) }</Container>
          </div >
        </div>
    </>
  )
}
