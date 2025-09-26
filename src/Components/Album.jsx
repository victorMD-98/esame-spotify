
import { Link } from 'react-router-dom'


export default function Album({albumID ,titolo , artista, img}) {

  return (
    <>
            <div className="text-center card_album mx-2" >
                  <Link to={`/album/${albumID}/${titolo}/0`} className='imgAlbum'>
                      <img src={img} alt="1" />
                  </Link>
                <p>
                  <Link to={`/album/${albumID}/${titolo}/0`} className='linkAlbum'>
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
