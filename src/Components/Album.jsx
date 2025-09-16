import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Album({titolo , artista, img}) {

    


  return (
    <>
            <div className="text-center card_album" >
                  <Link className='imgAlbum'>
                      <img src={img} alt="1" />
                  </Link>
                <p>
                  <Link className='linkAlbum'>
                    Album: {titolo}
                  </Link>
                  <br />
                  <Link className='linkAlbum' >
                    Artist: {artista}     
                  </Link>
               </p>
           </div>
    </>
  )
}
