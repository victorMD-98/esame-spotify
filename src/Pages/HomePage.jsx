import React from 'react'
import NavbarComp from '../Components/NavbarComp'
import MainComp from '../Components/MainComp'

export default function HomePage() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <NavbarComp/>
                <MainComp/>
            </div>
        </div>
    </>
  )
}
