import './Design.css'
import React from 'react'

const Design = () => {
  return (
    <div id='design'>
        <i className="fa-solid fa-compass-drafting"></i>
        <p>O design do site foi feito de forma não profissional, seguindo o bom senso e seguindo inspirações da internet. Meu foco é o código.</p>
        <img src={require('../../images/design.png')} alt="Ferramenta de Design dentro da roda cromática." />
    </div>
  )
}

export default Design