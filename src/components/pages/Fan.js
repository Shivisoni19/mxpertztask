import React from 'react'
import logo from '../../utils/img/logo.png'
import {Link} from 'react-router-dom'
import news from '../../utils/img/news.png'
import mobile from '../../utils/img/mobile.svg'
import wifi from '../../utils/img/wifi.png'
import book from '../../utils/img/book.png'
import customer from '../../utils/img/customer.svg'
import local from '../../utils/img/local.png'
import mainmobile from '../../utils/img/main-mobile.png'

const Fan = () => {
  return (
    <>
      <div className='container-fluid bg-img-fan'>
        <div className='fan-bg pl-0 pr-0'>
          <div className='main-heading text-center text-white'>
            <img src={logo} alt="logo"/>
            <h1 className='home-top-heading'>Be the First to Know</h1>
            <h4 className='home-sub-heading'>Get push notifications for new music, videos, tours, and other breaking news from your<br/> favorite artists and festivals.</h4>
          </div>
          <div className='home-buttons'>
             <Link to="fan">
               <button className='green-button border-0'>
               <span className='green-btn-text'>Get the app</span>
               </button>
             </Link>
          </div>
        </div>
      </div>
      <section className='mobile-feature-section'>
        <div className='feature-container'>
          <div className='fan-heading text-white'>
            <h2 className='mobile-text'>Mobile App Features</h2>
          </div>
          <div className='row feature-description'>
             <div className='first-column col-lg-4 col-sm-12'>
               <div className='row'>
                 <div className='col-8'>
                  <div className='all-titles text-right'>
                  <h3 className='col-title'>Customized News Feed</h3>
                    <p className='col-description'>Create a feed that is curated just for you based on your music preferences and tastes.</p>
                  </div>
                 </div>
                 <div className='col-4'>
                 <div className='icon'>
                    <img src={news}/>
                  </div>
                 </div>
               </div>
               <div className='row'>
                 <div className='col-8'>
                  <div className='all-titles text-right'>
                  <h3 className='col-title'>Customized News Feed</h3>
                    <p className='col-description'>Create a feed that is curated just for you based on your music preferences and tastes.</p>
                  </div>
                 </div>
                 <div className='col-4'>
                 <div className='icon'>
                    <img src={mobile} className="svg-img"/>
                  </div>
                 </div>
               </div>
               <div className='row'>
                 <div className='col-8'>
                  <div className='all-titles text-right'>
                  <h3 className='col-title'>Customized News Feed</h3>
                    <p className='col-description'>Create a feed that is curated just for you based on your music preferences and tastes.</p>
                  </div>
                 </div>
                 <div className='col-4'>
                 <div className='icon'>
                    <img src={local}/>
                  </div>
                 </div>
               </div>
             </div>
             <div className='first-column col-lg-4 col-sm-12'>
               <div className='row'>
                 <div className='col-12'>
                 <div className='text-center'>
                    <img className='main-mobile-img' src={mainmobile}/>
                  </div>
                 </div>
               </div>
             </div>
             <div className='first-column col-lg-4 col-sm-12'>
               <div className='row'>
                 <div className='col-4'>
                  <div className='icon'>
                      <img src={news}/>
                    </div>
                 </div>
                 <div className='col-8'>
                  <div className='all-titles'>
                    <h3 className='col-title'>Customized News Feed</h3>
                    <p className='col-description'>Create a feed that is curated just for you based on your music preferences and tastes.</p>
                  </div>
                 </div>
               </div>
               <div className='row'>
                 <div className='col-4'>
                  <div className='icon'>
                      <img src={book}/>
                    </div>
                 </div>
                 <div className='col-8'>
                  <div className='all-titles'>
                    <h3 className='col-title'>Customized News Feed</h3>
                    <p className='col-description'>Create a feed that is curated just for you based on your music preferences and tastes.</p>
                  </div>
                 </div>
               </div>
               <div className='row'>
                 <div className='col-4'>
                  <div className='icon'>
                      <img className="svg-img" src={customer}/>
                    </div>
                 </div>
                 <div className='col-8'>
                  <div className='all-titles'>
                    <h3 className='col-title'>Customized News Feed</h3>
                    <p className='col-description'>Create a feed that is curated just for you based on your music preferences and tastes.</p>
                  </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Fan
