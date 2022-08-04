import React from 'react'
import {Link} from 'react-router-dom'

const FaqBottom = () => {
  return (
    <>
    <div className='container work-space reveal'>
      <div className='text-center'>
        <h2 className='faq-bottom-text'>Have More Questions?</h2>
        <div className='btn-mrgn'>
           <Link className='contact button link' to="/">Contact Us</Link>
        </div>       
      </div>
      </div>
    </>
  )
}

export default FaqBottom
