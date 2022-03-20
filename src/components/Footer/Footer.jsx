import './Footer.css'
import React from 'react'

import PortfolioBtn from '../PortfolioBtn'
import Contacts from '../Contacts'

const Footer = () => {
  return (
    <div id='footer'>
        <span className='footer-bg'></span>
        <h2>Se interessou pelo meu trabalho?</h2>
        <div className='footer-content'>
            <div>
                <h3>Você consegue ver mais projetos no meu portfólio:</h3>
                <PortfolioBtn />
            </div>
            <div>
                <h3>Ou entrar e contato em alguma dessas redes:</h3>
                <Contacts class="footer-contacts" />
            </div>
        </div>
    </div>
  )
}

export default Footer