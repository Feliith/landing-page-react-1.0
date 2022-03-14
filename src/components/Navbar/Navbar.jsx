import './Navbar.css'

import React, {useState} from 'react'

import PortfolioBtn from '../PortfolioBtn'
import MenuLinks from './MenuLinks'

const Navbar = () => {
    
    const [clicked, setClick] = useState(false)

    const handleClick = () => {
        setClick(!clicked)
    }

    const [scrolled, setScroll] = useState(false)

    return (
        <div className={scrolled ? 'navbar' : 'navbar on'}>
            <a href="" className="nav-logo">
                <i className='fa-brands fa-react'></i>
                <p>Felipe R.</p>
            </a>
            <i className='fa fa-bars' id='nav-burger' onClick={handleClick}></i>
            <div className={clicked ? 'nav-menu on' : 'nav-menu'} onClick={handleClick}>
                <i className='fa fa-times' id='nav-close'></i>
                {MenuLinks.map((item, index) => {
                    return (
                        <ul className="nav-links">
                            <li className="nav-link">
                                <a href={item.to}>
                                    {item.title}
                                </a>
                            </li>
                        </ul>
                    )
                })}
                <PortfolioBtn />
            </div>
        </div>
    )
}

export default Navbar