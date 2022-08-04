import React from 'react'
import Navbar from '../layout/Navbar'
import {Link} from 'react-router-dom'
import artist1 from '../../utils/img/artist1.png'
import artist2 from '../../utils/img/artist2.png'
import artist3 from '../../utils/img/artist3.png'
import artist4 from '../../utils/img/artist4.png'
import ArtistSliderSection from '../ArtistSliderSection'
import HowItWorks from '../HowItWorks'
import SaveTime from '../SaveTime'
import SocialMedia from '../SocialMedia'
import Faq from '../Faq'
import Footer from '../layout/Footer'
import FaqBottom from '../FaqBottom'

const Artist = () => {
  return (
    <>
     <Navbar/>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-sm-12'>
              <div className='col-left-content'>
                <h1 className='left-text'>Automated <br/>Music Websites</h1>
                <p className='left-paragraph font-style1'>Build in minutes with 3 simple steps.  Let your<br/> website automatically update for you when you <br/> release music, videos, tours, and news!</p>
              </div>
              <div className='artist-buttons'>
              <Link to="fan">
                <button className='green-button1 border-0'>
                <span className='btn-text'>JamFeed for fans</span>
                </button>
              </Link>
              <Link to="fan">
                <button className='book-a-demo border-0'>
                <span className='btn-text'>BOOK A DEMO</span>
                </button>
              </Link>
            </div>
          </div>
          <div className='col-lg-7 col-sm-12'>
            <div className='row'>
              <div className='col-2'>
                <img src={artist1} alt="artist1" className='img-1' width={875}height={750}/>
              </div>
              <div className='col-2'>
                <img src={artist2} alt="artist2" className='img-2' width={875}height={750}/>
              </div>
              <div className='col-2'>
                <img src={artist3} alt="artist3" className='img-3' width={875}height={750}/>
              </div>
              <div className='col-2'>
                <img src={artist4} alt="artist4" className='img-4' width={875}height={750}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArtistSliderSection/>
      <HowItWorks/>
      <SaveTime/>
      <SocialMedia/>
      <Faq/>
      <FaqBottom/>
      <Footer/>
    </>
  )
}

export default Artist
