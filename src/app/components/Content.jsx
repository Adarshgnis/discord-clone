import React from 'react'
import "./Content.css"

const Content = (props) => {

    const contentStyle = {
        flexDirection: props.flexDirection === "column-reverse" ? "column-reverse" : (props.reverse ? "row-reverse" : "row")
    }

    const rightPartStyle = {
        ...props.customStyle
    }

  return (
    <div className='Content-wrapper container' style={contentStyle}>
        <div className="left-part">
            <img src={props.image} alt="image" />
        </div>
        <div className="right-part" style={rightPartStyle}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default Content