import React from 'react'
import "./CallToAction.css"

const CallToAction = () => {
  return (
    <div className='CallToAction-wrapper'>
        <img src="/sparkles.png" alt="sparkles" />
        <h3>Ready to start your journey?</h3>
        <button className="action-btn download-btn"> <img src="/pngwing 1.png" alt="" /> Download for windows</button>
    </div>
  )
}

export default CallToAction