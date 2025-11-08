import { useEffect, useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSong } from '../slice/getSearchSong';
import { reset } from '../slice/getSearchSong';
import "../Assets/FileCss/header.scss"

export default function NavbarComp() {

    const location = useLocation();
    const [cerca, setcerca]= useState("")
    const dispatch = useDispatch();

    function ricerca(event){
      const value = event.target.value;
      setcerca(value);
    }

    useEffect(() => {
      setTimeout(() => {
          if(cerca.length > 0){
            dispatch(fetchSong(cerca));
          } else {
            dispatch(reset());
          }
      }, 500);
      
    },[cerca]);

  return (
      <nav>
         <div>
            <img src="/images/Spotify_Logo.png" alt="" />
            <Link to={"/"} className='link_nav'>
                <i className="bi bi-house-door-fill"></i> Home
            </Link>
            <Link className='link_nav'>
                <i className="bi bi-book-fill"></i> Your Library
            </Link>
            <input style={{display: location.pathname === "/" ? "block" : "none"}} onChange={ricerca} type="text" placeholder='Cerca'/>
         </div>
         <div>
           <button name='signUp'> Sign Up </button>
           <button name='login'> Login </button>
           <span><Link className='link_nav' >Cookie Policy</Link> | <Link className='link_nav' >Privacy</Link></span>
         </div>
      </nav>  
  )
}
