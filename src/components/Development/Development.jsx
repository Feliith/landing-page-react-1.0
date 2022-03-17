import './Development.css'
import React from 'react'

import Atom from '../Atom'

const Development = () => {
  return (
    <div id="dev">
        <h3>Desenvolvimento</h3>
        <div className='dev-info one'>
            <h2>As ferramentas utilizadas para desenvolver esse site foi o trio:</h2>
            <h2>HTML5, CSS3 e JavaScript</h2>
            <div className='dev-tools-icons'>
                <a href="" className='tool-icon'>
                    <i className='fa fa-html5'></i>
                </a>
                <a href="" className='tool-icon'>
                    <i className='fa-brands fa-css3-alt'></i>
                </a>
                <a href="" className='tool-icon'>
                    <i className='fa-brands fa-js-square'></i>
                </a>
            </div>
        </div>
        <div className='dev-info two'>
            <h2>Utilizando a biblioteca de códiogo aberto do JavasScript:</h2>
            <h2>o <strong>React</strong></h2>
            <a href="" className='tool-icon react'>
                <i className='fa-brands fa-react'></i>
            </a>
        </div>

        <Atom class="atom dev-one" />
        <Atom class="atom dev-two" />
    </div>
  )
}

export default Development