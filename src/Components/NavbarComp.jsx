import React, { useState } from 'react'
import "../Assets/FileCss/style.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import logo from "../Assets/images/Spotify_Logo.png"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchSongs } from '../Actions/getAllSongs';

export default function NavbarComp() {

    const [cerca, setcerca]= useState()

    const dispatch = useDispatch()

    const canzoniR = useSelector(state=> state.artista)

    console.log(canzoniR)
  return (
    <>
        <div class="col-2">
          <nav
            className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
            id="sidebar"
          >
            <div className="nav-container">
              <a className="navbar-brand" href="index.html">
                <img
                  src={logo}
                  alt="Spotify_Logo"
                  width="131"
                  height="40"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                    <Link to="/" className="nav-item nav-link">
                    <i class="bi bi-house-door-fill"></i>  Home
                        
                    </Link>  
                    </li>
                    <li>
                    <Link className="nav-item nav-link" >
                        <i className="bi bi-book-fill"></i> Your
                        Library
                    </Link>  
                    </li>
                    <li>
                      <div className="input-group mt-3">
                        <input onChange={(e)=>{setcerca(e.target.value)}}
                          type="text"
                          className="form-control mb-2"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div
                          className="input-group-append "
                          id='stile'
                        >
                          <button onClick={()=> dispatch(searchSongs(cerca))}
                            className="btn btn-outline-secondary btn-sm h-100"
                            type="button"
                            id="button-addon1"
                          >
                            GO
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="nav-btn">
              <button className="btn signup-btn" type="button">Sign Up</button>
              <button className="btn login-btn" type="button">Login</button>
              <div>
              <a href="#">Cookie Policy</a>
              <a href="#"> Privacy</a>
              </div>
            </div>
          </nav>
        </div>
    </>
  )
}
