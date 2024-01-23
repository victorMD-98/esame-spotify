import React, { useEffect } from 'react'
import "../Assets/FileCss/style.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getAllSongs from '../Actions/getAllSongs';
export default function MainComp() {

    const album = useSelector(state => state.album)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllSongs())
    },[])

    console.log(album)
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
          </div>
            
        
        </div>
    </>
  )
}
