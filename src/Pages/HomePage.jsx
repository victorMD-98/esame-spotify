
import NavbarComp from '../Components/NavbarComp'
import MainComp from '../Components/MainComp'
import Player from "../Components/player"

export default function HomePage() {
  return (
    <> 
        <header> 
            <NavbarComp/>
        </header>
        <main className='mainHome'>
            <MainComp/>
        </main>
        <Player/>
    </>
  )
}
