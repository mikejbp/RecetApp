import React from 'react'
import '../../Styles/ElementsBanner.css'
const ElementsBanner = ({ text1, text2, button }) => {
  return (
    <section className='text-button'>
      <div className='text-wrapper'>
        <h1 className='textOne'>
          {text1}
        </h1>
        <h3 className='textTwo'>
          {text2}
        </h3>
        
      </div>

      <a href="/register" className='button'>
        {button}
      </a>
    </section>
  )
}

export default ElementsBanner