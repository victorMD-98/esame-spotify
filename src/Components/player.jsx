import "../Assets/FileCss/player.scss"

export default function Player(){

    return <>
                <div className='bg-dark w-100 sticky-bottom fixed-bottom'>
                    <div className="d-flex justify-content-center" >
                        <img className="img" src="/images/Shuffle.png" alt="" /> <img className="img" src="/images/Previous.png" alt="" /> <img className="img" src="/images/Play.png" alt="" /> <img className="img" src="/images/Next.png" alt="" /> <img className="img" src="/images/Repeat.png" alt="" />
                    </div>
                    <div className="riga"></div>
                </div>
          </>
}