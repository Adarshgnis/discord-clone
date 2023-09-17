import React from 'react'
import './Hero.css'
import heroBg from 'next/image'
import Nav from './Nav'

const Hero = () => {
  return (
    <div id='hero-container'>
        <Nav/>
        <div className="hero-content-wrapper">
            <h1>Your place to talk</h1>
            <p>Whether you're part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, Discord makes it easy to talk every day and hang out more often.</p>
            <div className="button-group">
                <button className="action-btn download-btn"> <img src="/pngwing 1.png" alt="" /> Download for windows</button>
                <button className="action-btn">Open Discord in your browser</button>
            </div>
        </div>
    </div> 
  )
}

export default Hero