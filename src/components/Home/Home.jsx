import './Home.css'

import React from 'react'

import PortfolioBtn from '../PortfolioBtn'
import Contacts from '../Contacts'

const Home = () => {
  return (
    <div className='home' id='home'>
      <span className="home-bg"></span>

      <div className="home-text">
        <span className='home-text-bg'></span>
        <h2>Felipe Robles</h2>
        <h1>Desenvolvedor <br/> Web</h1>
        <h3>Junior</h3>
        <PortfolioBtn />
      </div>

      <a href="#gallery" className="home-arrows">
        <i className="fa-solid fa-angles-down"></i>
      </a>

      <Contacts class="home-contacts" />
    </div>
  )
}

export default Home