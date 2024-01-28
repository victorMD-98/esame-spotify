import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchSong({titolo , artista, img}) {
  return (
    <>
        
                    <div class="col-3 text-center" >
                <Link>
                    <img class="img-fluid" src={img} alt="1" />
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
