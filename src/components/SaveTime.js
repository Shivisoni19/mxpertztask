import React from 'react'
import image1 from '../utils/img/artist-bg.png'
import image2 from '../utils/img/artist-mobile.png'

const SaveTime = () => {
  return (
    <>
      <div className='container '>
        <div className='row work-space'>
            <div className='col-lg-6 col-sm-12 reveal'>
                <div className='save-heading'>
                    <h2>SAVE TIME WITH <br/>AUTOMATED WEBSITE <br/>UPDATES</h2>
                    <p>JamFeed gives you the ability to always have your<br/> website up to date without having to worry about <br/>updating it every time you release new content.<br/> Enjoy our quick and easy setup and automated<br/> updates so you can focus on your music.</p>
                </div>
            </div>
            <div className='col-lg-6 col-sm-12 reveal'>
                <div className='save-bg-img'>
                    <img src={image1} alt='save' className='image1 save-img1'/>
                    <img src={image2} alt='save' className='image1 save-img2'/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SaveTime
