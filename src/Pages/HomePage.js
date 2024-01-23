import React from 'react'
import NavbarComp from '../Components/NavbarComp'
import MainComp from '../Components/MainComp'

export default function HomePage() {
  return (
    <>
        <div class="container-fluid">
            <div class="row">
                <NavbarComp/>
                <MainComp/>
            </div>
        </div>
    </>
  )
}
