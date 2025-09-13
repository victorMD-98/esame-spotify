import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Canzoni({titolo , artista, img}) {

    


  return (
    <>
            <div className="col-3 text-center" >
                <Link>
                      <img className="img-fluid" src={img} alt="1" />
                </Link>
                <p>
                  <Link>
                    Album: {titolo}
                  </Link>
                  <br />
                  <Link>
                    Artist: {artista}     
                  </Link>
               </p>
           </div>
    </>
  )
}
