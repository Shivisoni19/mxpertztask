import React from 'react'
import { Link } from 'react-router-dom'
import { SliderContent } from './json/SliderContent'

const ArtistSliderSection = () => {
  return (
    <>
      <div className='container-fluid off-white-bg'>
        <h2 className='text-center trusted-text'>Trusted by Artists & Bands</h2>
        <section>
          <marquee>
            <div className='row'>
              {SliderContent.map(curElem => {
                const { id, userimage, username, userlink, subtext } = curElem
                console.log(curElem)
                return (
                  <div className='col-lg-3 col-sm-12'>
                    <div className='card card-block'>
                      <div className='content-wrap'>
                        <img src={userimage} alt='user' className='user-img' />
                        <div className='text-wrap'>
                          <p className='username'>{username}</p>
                          <Link to='/' className='user-link'>
                            {userlink}
                          </Link>
                        </div>
                      </div>
                      <div className=''>
                        {/* {subtext} */}
                        I moved my website over from <br/> Squarespace  to JamFeed because their <br/>product is  specifically formusicians <br/> like me and their team helped me set <br/> the whole thing  up in a few minutes.
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </marquee>
        </section>
      </div>
    </>
  )
}

export default ArtistSliderSection
