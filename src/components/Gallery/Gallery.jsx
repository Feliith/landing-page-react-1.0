import './Gallery.css'
import React from 'react'

import Atom from '../../images/atom.png'

const Projects = [
    {
        title: 'Porfólio',
        url: 'https://portfolio-puro.netlify.app/',
        src: require('../../images/projects/portfolio-puro.png')
    },
    {
        title: 'Landing Page',
        url: 'https://landing-page-puro.netlify.app/',
        src: require('../../images/projects/landing-page-puro.png')
    },
    {
        title: 'Formulário de LogIn',
        url: 'https://formulario-de-login-puro.netlify.app/',
        src: require('../../images/projects/formulario-login-puro.png')
    },
    {
        title: 'Loja Virtual',
        url: 'https://loja-virtual-puro.netlify.app/',
        src: require('../../images/projects/loja-virtual-puro.png')
    },
    {
        title: 'Jogo da Velha',
        url: 'https://jogo-da-velha-puro.netlify.app/',
        src: require('../../images/projects/jogo-da-velha-puro.png')
    }
]

const Gallery = () => {
    return (
        <div className="gallery" id="gallery">
            <div className='gallery-text'>
                <h2>Welcome</h2>
                <p>Conheça meu trabalho como desenvolvedor front-end! Abaixo você poderá ver alguns dos meus projetos:</p>
            </div>

            <div className="portfolio-gallery">
                {Projects.map((item, index) => {
                    return (
                        <a key={index} href={item.url} target="_blank" className='gallery-link' style={{background: `url(${item.src})`, backgroundSize: 'cover'}}></a>
                    )
                })}
            </div>

            <a href="https://portfolio-puro.netlify.app/" target="_blank" className="portfolio-link">Ver todos os projetos &gt;</a>

            <img src={Atom} className="atom one-gallery" />
            <img src={Atom} className="atom two-gallery" />
        </div>
    )
}

export default Gallery