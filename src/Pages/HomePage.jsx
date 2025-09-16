import "../Assets/FileCss/style.scss"
import NavbarComp from '../Components/NavbarComp'
import MainComp from '../Components/MainComp'

export default function HomePage() {
  return (
    <> 
        <header> 
            <NavbarComp/>
        </header>
        <main>
            <MainComp/>
        </main>
    </>
  )
}
