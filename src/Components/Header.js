import React from 'react'
import Logo1 from './Images/logo1.jpg'
import LogoAfg from './Images/logoAfg.jpg'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav'

function Header() {
  return (
    <div className='header'>
        <div className='d-flex justify-content-around '>
            <div>
                <img src={Logo1} alt="" />
            </div>
            <div className='d-flex align-items-center'>
                <h2>Ministry of Martyers and Disabled Affairs</h2>
            </div>
            <div>
                <img src={LogoAfg} alt="" />
            </div>
        </div>
        <Nav />
    </div>
  )
}

export default Header