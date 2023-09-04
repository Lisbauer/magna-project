import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='home-bg'> 
        <div className='bg_text_btn'>
            <div className='home_text_container'>
                <h1 className='dimenseon_text' data-text='DIMENSEON'>DIMENSEON</h1>
            </div>
         { /* <div className='neon_wrapper'>
            <span className='wrapper_text'>DIMENSEON</span>
            <span className='wrapper_gradient'></span>
            <span className='wrapper_dodge'></span>
  </div> */}



        <div className='home_btn_container'>
        <a className='home_btn' href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Nuestros mundos
        </a>

        <a className='home_btn' href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Hacé contacto
        </a>
        </div>
        </div>
    </div>
  )
}

export default Home