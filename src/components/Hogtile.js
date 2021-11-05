import React, { useState } from 'react'

const Hogtile = ({name, image, specialty, weight, greased}) => {
    
    const [clicked, setClicked] = useState(false)
    const [hideHog, setHideHog] = useState(false)

    return (
        <div>
        <button onClick={() => setHideHog((hideHog) => !hideHog)} className="ui animated button">{hideHog ?"Show Hog" : "Hide Hog"}</button>
        {!hideHog && <div onMouseEnter={() => setClicked(true)} onMouseLeave={() => setClicked(false)} className="ui card">
        <div className="image">
            <img src={image}/>
        </div>
        <div className="content">
            <a className="header">{name}</a>
            <div className="meta">
            {clicked && <span className="date">{weight}</span>}
            </div>
            {clicked && <div className="description">
            {specialty}
            </div>}
        </div>
        </div>}
        </div>
    )
}

export default Hogtile
