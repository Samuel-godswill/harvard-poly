import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure Better Education for a Better World</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynmic field of education</p>
            <button className='btn'>Explore more <img src={arrow} alt='' /></button>
        </div>
    </div>
  )
}

export default Hero;