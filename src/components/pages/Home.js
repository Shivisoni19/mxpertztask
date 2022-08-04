import React from 'react'
import logo from '../../utils/img/logo.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='container-fluid bg-img'>
        <div className='home-bg pl-0 pr-0'>
          <div className='main-heading text-center text-white'>
            <img src={logo} alt="logo"/>
            <h1 className='home-top-heading'>Never Miss A Beat</h1>
            <h4 className='home-sub-heading'>Get real-time updates on new music, videos, tours, news, and more!</h4>
          </div>
          <div className='home-buttons'>
             <Link to="artist" >
               <button className='white-button border-0'>
                  <span className='white-btn-text'>JamFeed for artists</span>
               </button>
             </Link>
             <Link to="fan">
               <button className='green-button'>
               <span className='green-btn-text'>JamFeed for fans</span>
               </button>
             </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
