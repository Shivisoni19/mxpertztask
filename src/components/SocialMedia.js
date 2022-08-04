import React from 'react'
import image3 from '../utils/img/pc-bg.png'
import image4 from '../utils/img/pc.png'

const SocialMedia = () => {
  return (
    <>
      <div className='container'>
        <div className='row work-space'>
            <div className='col-lg-7 col-sm-12 reveal'>
                <div className='save-bg-img'>
                    <img src={image3} alt='save' className='image1 save-img1'/>
                    <img src={image4} alt='save' className='image1 save-img2'/>
                </div>
            </div>
            <div className='col-lg-5 col-sm-12'>
                <div className='save-heading reveal'>
                    <h2>GET STREAMING AND<br/> SOCIAL MEDIA <br/>ANALYTICS IN ONE <br/> PLACE</h2>
                    <p>JamFeed gives you the ability to always have your<br/> website up to date without having to worry about <br/>updating it every time you release new content.<br/> Enjoy our quick and easy setup and automated<br/> updates so you can focus on your music.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SocialMedia
