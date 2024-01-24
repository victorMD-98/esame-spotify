import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchSong() {
  return (
    <>
        <div className="row">
            <div className="col-10">
              <div id="searchResults" style="display: none">
                <h2>Search Results</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                ></div>
                    <div class="col text-center" >
                <Link>
                    <img class="img-fluid" src="" alt="1" />
                </Link>
            <p>
              <Link>
    
              </Link>
              <br />
              <Link>
                    
              </Link>
            </p>
          </div>
              </div>
            </div>
          </div>
    </>
  )
}
