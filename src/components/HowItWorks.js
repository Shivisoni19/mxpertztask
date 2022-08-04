import React from 'react'

const HowItWorks = () => {
  return (
    <>
      <div className='container reveal'>
        <div className='work-heading'>
            <h2 className='text-center'>How It Works</h2>
        </div>
        <div className='row work-space'>
            <div className='col-lg-4 col-sm-12'>
                <div className='text-center'>
                    <img className='work-img' src='https://www.jamfeed.com/images/how-it-works-1.svg' alt='img1' />
                </div>
                <div className='work-content'>
                    <h2 className='work-top-heading'>Sign Up</h2>
                    <p className='work-sub-heading'>Sign up to the JamFeed platform and connect your social and streaming accounts instantly with just a few clicks.</p>
                </div>
            </div>
            <div className='col-lg-4 col-sm-12'>
                <div className='text-center'>
                    <img className='work-img' src='https://www.jamfeed.com/images/how-it-works-2.svg' alt='img1'/>
                </div>
                <div className='work-content'>
                    <h2 className='work-top-heading'>Claim Your Page</h2>
                    <p className='work-sub-heading'>Claim your artist / band page with Facebook or email so no one can access your page without your permission.</p>
                </div>
            </div>
            <div className='col-lg-4 col-sm-12'>
                <div className='text-center'>
                    <img className='work-img' src='https://www.jamfeed.com/images/how-it-works-3.svg' alt='img1' />
                </div>
                <div className='work-content'>
                    <h2 className='work-top-heading'>Automated Updates</h2>
                    <p className='work-sub-heading'>Sit back and watch our automated websites update for you in real-time with new music, videos, tours, and news.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
