import React from 'react'
import { Link } from 'react-router-dom'
import navlogo from '../../utils/img/nav-logo.png'

const Footer = () => {
  return (
    <>
      <div className='container-fluid footer-bg '>
        <div className='container'>
          <div className='footer-top text-center'>
            <h2 className='footer-heading'>Save Time & Money!</h2>
            <Link to='fan'>
              <button className='green-button1 border-0'>
                <span className='btn-text font-weight-normal'>
                  Book a free demo
                </span>
              </button>
            </Link>
          </div>
          <div className='border-bottom'></div>
          <div className='footer-copyright pb-5'>
            <div className='copyright margin-bottom-16'>
              © 2022 JamFeed, Inc.
            </div>
            <div className='footer-terms'>
              <Link
                to='https://www.jamfeed.com/legal/terms-of-service.html'
                className='terms'
              >
                Terms of Service
              </Link>
              <Link
                to='https://www.jamfeed.com/legal/privacy-policy.html'
                className='privacy'
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className='intercom-lightweight-app-launcher intercom-launcher'>
          <div className='intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open'>
            <i
              class='fas fa-comment-alt'
              data-bs-toggle='modal'
              data-bs-target='#myModal'
            ></i>
          </div>
          <div class='modal' id='myModal'>
            <div class='modal-dialog'>
              <div class='modal-content'>
                {/* <!-- Modal Header --> */}
                <div class='modal-header'>
                  <h4 class='modal-title'>
                    <img src={navlogo} alt='logo' width={200} />
                  </h4>
                  <button
                    type='button'
                    class='btn-close'
                    data-bs-dismiss='modal'
                  ></button>
                </div>

                {/* <!-- Modal body --> */}
                <div class='modal-body font-weight-bold'>Hey There</div>
                <input type="textarea" class="form-control text-area text-center" placeholder="Enter Message"/>
                <Link to="fan" className='text-center'>
               <button className='green-button border-radius border-0'>
               <span className='btn-text'>Send us a message</span>
               </button>
             </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
