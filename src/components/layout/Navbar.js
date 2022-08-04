import React, { useState } from 'react'
import navlogo from '../../utils/img/nav-logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <>
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-white'> 
               <div className='nav-logo'>
                 <img className='nav-logo' src={navlogo} alt="logo-nav" />
               </div>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShow(!show)}
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className='navbar-nav mt-3'>
              <li className='nav-item'>
                <Link className='nav-link text-dark font-style' aria-current='page' to="/">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
