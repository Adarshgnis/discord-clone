import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div id='nav-wrapper' className='container'>
        <div className="logo">
            <img src="/logo 1.png" alt="" />
        </div>
        <div className="nav-links">
            <ul className="nav-items">
                <li><a href="#">Downloads</a></li>
                <li><a href="#">Why Discord</a></li>
                <li><a href="#">Nitro</a></li>
                <li><a href="#">Safety</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>
        <div>
            <button className='action-btn'>Login</button>
        </div>
    </div>
  )
}

export default Nav